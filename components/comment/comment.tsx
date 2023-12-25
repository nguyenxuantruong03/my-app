"use client";
import axios from "axios";
import React, { useState, useEffect, ChangeEvent } from "react";
import Container from "../ui/container";
import Image from "next/image";
import { commentcolor } from "@/components/color/color";
import { useUser } from "@clerk/nextjs";
import { Star, Trash2, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useEmojiSelection from "@/hooks/emoji";
import EmojiPage from "./emoji";

interface Comment {
  rating: number;
  comment: string;
  commenter: string;
  createdAt: string;
  nameproduct: string;
  imageUrl: string;
  id?: string;
  responses?: ResponseComment[];
}

interface ResponseComment {
  id: string;
  commenter: string;
  imageUrl: string;
  description: string;
  createdAt: string;
}
interface CommentProps {
  data: string;
}
const Comment: React.FC<CommentProps> = (
  { data },
  { params }: { params: { commentId: string } }
) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [savedComments, setSavedComments] = useState<Comment[]>([]);
  const [commentError, setCommentError] = useState<string>("");
  const [ratingError, setRatingError] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [commentsByRating, setCommentsByRating] = useState<{
    [key: number]: Comment[];
  }>({});
  const [collapsedComments, setCollapsedComments] = useState<boolean>(false);
  const stars = Array(5).fill(0);
  const stars1 = Array(1).fill(0);
  const router = useRouter();
  const { resetEmojiLength } = useEmojiSelection(comment);

  // Use an object to store response descriptions for each comment
  const [responseDescriptions, setResponseDescriptions] = useState<{
    [key: string]: string;
  }>({});
  const [showResponseForm, setShowResponseForm] = useState<string | null>(null);
  const [errorResponse, setErrorResponse] = useState<string>("");
  const [showResponseComments, setShowResponseComments] = useState<
    string | null
  >(null);

  // Update the handleResponseSubmit function to use the correct response description
  const handleResponseSubmit = async (commentId: any) => {
    try {
      const responseDescription = responseDescriptions[commentId];

      if (
        responseDescription === null ||
        responseDescription === undefined ||
        !responseDescription.trim()
      ) {
        setErrorResponse("Nội dung phản hồi không thể trống.");
        return;
      }
      setErrorResponse("");
      await axios.post(`/api/comments/${commentId}/responsecomment`, {
        description: responseDescriptions[commentId], // Use the correct response description
        imageUrl: user?.imageUrl || "/images/default_avatar.png",
        commenter: user?.username || "Vô danh",
        createdAt: new Date().toISOString(),
      });
      
      // Clear the response description for the submitted comment
      setResponseDescriptions((prevDescriptions) => {
        const newDescriptions = { ...prevDescriptions };
        delete newDescriptions[commentId];
        return newDescriptions;
      });
      toast.success('Phản hồi thành công.')
    } catch (error) {
      console.error("Error submitting response:", error);
      toast.error('Hãy thử lại.')
    }
  };

  const handleDeleteCommentresponse = async (
    commentId: string | undefined,
    id: string
  ) => {
    try {
      // Send a request to delete the comment
      await axios.delete(`/api/comments/${commentId}/responsecomment`, {
        data: { id: id },
      });
      // Update the local state to remove the deleted comment
      setSavedComments((prevComments) =>
        prevComments.map((comment) => {
          // Find the comment to update
          if (comment.id === commentId) {
            // Remove the response with the specified id
            comment.responses = comment.responses?.filter(
              (response) => response.id !== id
            );
          }
          return comment;
        })
      );
  
      toast.success('Xóa thành công.');
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error('Xóa không thành công. Hãy thử lại.');
    }
  };
  

  const [editingResponseId, setEditingResponseId] = useState<string | null>(
    null
  );

  const handleResponseEditClick = (
    commentId: string | undefined,
    responseId: string
  ) => {
    setEditingResponseId(responseId);

    if (commentId) {
      const responseToEdit = savedComments
        .find((comment) => comment.id === commentId)
        ?.responses?.find((response) => response.id === responseId);

      if (responseToEdit) {
        setResponseDescriptions({
          ...responseDescriptions,
          [commentId]: responseToEdit.description,
        });
      }
      setShowResponseForm(commentId);
    }
  };

  const handleResponseCancelEdit = (commentId: string | undefined) => {
    setEditingResponseId(null);
    setResponseDescriptions({
      ...responseDescriptions,
      [commentId || ""]: "", // Reset response description for the comment
    });
    setErrorResponse("");
  };


  const handleResponseUpdate = async (commentId: string | undefined) => {
    try {
      const responseDescription = responseDescriptions[commentId ?? ""];
      
      if (
        responseDescription === null ||
        responseDescription === undefined ||
        !responseDescription.trim()
      ) {
        setErrorResponse("Nội dung phản hồi không thể trống.");
        return;
      }
      
      setErrorResponse("");
      
      if (commentId) {
        const response = await axios.patch(
          `/api/comments/${commentId}/responsecomment`,
          {
            id: editingResponseId,
            description: responseDescription,
          }
        );
  
        // Update the response description in the state
        setResponseDescriptions((prevDescriptions) => ({
          ...prevDescriptions,
          [commentId]: response.data.description,
        }));
  
        // Reset the response description to an empty string
        setResponseDescriptions((prevDescriptions) => ({
          ...prevDescriptions,
          [commentId]: "",
        }));
  
        setEditingResponseId(null);
  
        // Update the savedComments state to reflect the changes
        setSavedComments((prevComments) =>
          prevComments.map((comment) => {
            // Find the comment to update
            if (comment.id === commentId) {
              // Find the response to update
              comment.responses = comment.responses?.map((response) => {
                if (response.id === editingResponseId) {
                  // Update the response description
                  response.description = responseDescription;
                }
                return response;
              });
            }
            return comment;
          })
        );
  
        toast.success('Chỉnh sửa thành công.');
      }
    } catch (error) {
      console.error("Error updating response:", error);
      setErrorResponse("Error updating response.");
      toast.error('Hãy thử lại.');
    }
  };
  
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments`);
        const fetchedComments: Comment[] = response.data;

        for (const comment of fetchedComments) {
          try {
            const responseCommentResponse = await axios.get(
              `/api/comments/${comment.id}/responsecomment`
            );
            const responseComments: ResponseComment[] =
              responseCommentResponse.data;
            comment.responses = responseComments;
          } catch (error) {
            console.error(
              `Error fetching responses for comment ID: ${comment.id}`,
              error
            );
          }
        }

        setSavedComments(fetchedComments);

        const commentsByRating: { [key: number]: Comment[] } =
          fetchedComments.reduce((acc, comment) => {
            if (acc[comment.rating]) {
              acc[comment.rating].push(comment);
            } else {
              acc[comment.rating] = [comment];
            }
            return acc;
          }, {} as { [key: number]: Comment[] });
        setCommentsByRating(commentsByRating);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleEditClick = (commentId: string | undefined) => {
    setEditingCommentId(commentId || null);
    const commentToEdit = savedComments.find(
      (comment) => comment.id === commentId
    );
    if (commentToEdit) {
      setRating(commentToEdit.rating);
      setComment(commentToEdit.comment);
      setCurrentValue(commentToEdit.rating);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setRating(null);
    setComment("");
    setCurrentValue(null);
    setCommentError("");
    setRatingError("");
  };

  const handleUpdate = async () => {
    // Add your validation logic here if needed
    try {
      const updatedComment = {
        id: editingCommentId,
        rating: rating as number,
        comment,
      };
  
      const response = await axios.patch(`/api/comments/`, updatedComment);
      const updatedCommentData: Comment = response.data;
  
      // Update the comment in the state
      const updatedComments: Comment[] = savedComments.map((comment) =>
        comment.id === updatedCommentData.id ? updatedCommentData : comment
      );
  
      setSavedComments(updatedComments);
      setEditingCommentId(null);
      setRating(null);
      setCurrentValue(null);
      setComment("");
      setCommentError("");
      setRatingError("");
  
      // Show a success toast
      toast.success(
        "Bình luận đã được cập nhật. Nếu chưa thấy có thể tải lại trang."
      );
    } catch (error) {
      console.error("Error updating comment:", error);
      toast.error("Xin vui lòng thử lại!");
    }
  };
  

  const handleDeleteComment = async (commentId: string | undefined) => {
    try {
      // Send a request to delete the comment
      await axios.delete(`/api/comments/`, {
        data: { id: commentId },
      });
  
      setSavedComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
  
      // Update commentsByRating if needed
      setCommentsByRating((prevCommentsByRating) => {
        const newCommentsByRating = { ...prevCommentsByRating };
        Object.keys(newCommentsByRating).forEach((rating) => {
          newCommentsByRating[rating as any] = newCommentsByRating[rating as any].filter(
            (comment) => comment.id !== commentId
          );
        });
        return newCommentsByRating;
      });
  
      // Show a success toast
      toast.success("Xóa thành công.");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Xóa không thành công. Hãy thử lại.");
    }
  };
  


  const { user } = useUser();

  const handleTimestampUpdate = () => {
    localStorage.setItem("lastCommentTime", Date.now().toString());
  };

  const canUserComment = () => {
    const lastCommentTime = localStorage.getItem("lastCommentTime");
    if (!lastCommentTime) {
      return true; // User hasn't commented before
    }

    const timeDifference = Date.now() - parseInt(lastCommentTime, 10);
    // const minutesPassed = timeDifference / (30000 * 60); // Convert milliseconds to hours
    const minutesPassed = timeDifference / 0; // Convert milliseconds to hours

    return minutesPassed >= 1;
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setCurrentValue(newRating);
    setRatingError("");
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    setCommentError("");
  };

  const handleSubmit = async () => {
    if (rating === null) {
      setRatingError("Hãy lựa chọn sao.");
      return;
    }

    if (comment.trim() === "") {
      setCommentError("Hãy nhập nội dụng đánh giá.");
      return;
    }

    if (!canUserComment()) {
      setCommentError("Bạn có thể đánh giá lại trong 30 phút nữa.");
      return;
    }

    handleTimestampUpdate();

    try {
      const newComment = {
        rating: rating as number,
        comment,
        imageUrl: user?.imageUrl || "/images/default_avatar.png",
        commenter: user?.username || "Vô danh",
        createdAt: new Date().toISOString(),
        nameproduct: data || "Sản phẩm",
      };
      const response = await axios.post("/api/comments/", newComment);
      const savedComment: Comment = response.data;

      const updatedComments: Comment[] = [...savedComments, savedComment];
      setSavedComments(updatedComments);

      setRating(null);
      setCurrentValue(null);
      setComment("");
      setCommentError("");
      setRatingError("");

      const updatedCommentsByRating: { [key: number]: Comment[] } = {
        ...commentsByRating,
        [newComment.rating]: [
          ...(commentsByRating[newComment.rating] || []),
          newComment,
        ],
      };
      setCommentsByRating(updatedCommentsByRating);
      toast.success('Đánh giá thành công.')
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error('Hãy thử lại.')
    }
    resetEmojiLength();
  };

  const calculateTotalReviews = () => {
    return savedComments.filter((comment) => comment.nameproduct === data)
      .length;
  };

  // Use the calculateTotalReviews function to get the total reviews for the current product
  const totalReviews = calculateTotalReviews();

  const starReviewCounts: number[] = [0, 0, 0, 0, 0];

  savedComments
    .filter((comment) => comment.nameproduct === data)
    .forEach((savedComment) => {
      if (savedComment.rating >= 1 && savedComment.rating <= 5) {
        starReviewCounts[savedComment.rating - 1]++;
      }
    });

  const calculateAverageRating = (productName: string) => {
    const productComments = savedComments.filter(
      (comment) => comment.nameproduct === productName
    );

    const totalStarsGiven = productComments.reduce(
      (total, savedComment) => total + savedComment.rating,
      0
    );

    const totalReviews = productComments.length;

    if (totalReviews === 0) {
      return 0;
    }
    const averageRating = totalStarsGiven / totalReviews;
    return Math.min(averageRating, 5);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const renderStars = (integerPart: number, fractionalPart: number) => {
    const starElements = [];

    // Render full stars for the integer part
    for (let i = 0; i < integerPart; i++) {
      starElements.push(
        <Star
          key={i}
          size={24}
          color={commentcolor.orange}
          style={{
            marginRight: 10,
          }}
        />
      );
    }

    // Render a partially filled star for the fractional part
    if (fractionalPart > 0) {
      starElements.push(
        <Star
          key={integerPart}
          size={24}
          color={commentcolor.orange}
          style={{
            marginRight: 10,
            clipPath: `polygon(0 0, ${fractionalPart * 100}% 0, ${
              fractionalPart * 100
            }% 100%, 0% 100%)`,
          }}
        />
      );
    }

    // Render grey stars for the remaining empty stars
    const remainingStars = 5 - starElements.length;
    for (let i = 0; i < remainingStars; i++) {
      starElements.push(
        <Star
          key={integerPart + i + 1}
          size={24}
          color={commentcolor.grey}
          style={{
            marginRight: 10,
          }}
        />
      );
    }
    return starElements;
  };

  const formatTimestamp = (timestamp: string) => {
    const createdDate = new Date(timestamp);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - createdDate.getTime();
    const minuteDifference = Math.floor(timeDifference / (1000 * 60));
    const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthDifference = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30)
    );

    if (monthDifference >= 1) {
      return createdDate.toLocaleDateString("vi-VN");
    } else if (dayDifference >= 2) {
      return `${dayDifference} ngày trước`;
    } else if (dayDifference === 1) {
      return "1 ngày trước";
    } else if (hourDifference >= 2) {
      return `${hourDifference} giờ trước`;
    } else if (hourDifference === 1) {
      return "1 giờ trước";
    } else if (minuteDifference >= 2) {
      return `${minuteDifference} phút trước`;
    } else {
      return "Vừa xong";
    }
  };

  return (
    <Container>
      <div className="p-4 shadow-lg my-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">
          Đánh giá và Bình luận - {data}
        </h2>
        <div className="grid md:grid-cols-2 shadow-inner p-2">
          <div className="m-auto">
            <h3 className="font-bold text-3xl">
              {calculateAverageRating(data).toFixed(1)}/5
            </h3>
            <h3 className="flex">
              {renderStars(
                Math.floor(calculateAverageRating(data)),
                calculateAverageRating(data) % 1
              )}
            </h3>
            <h3>{totalReviews} đánh giá và nhận xét</h3>
          </div>

          <div>
            <div className="flex relative">
              5
              {stars1.map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  color={commentcolor.orange}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              ))}
              <div
                style={{
                  width: `${(starReviewCounts[4] / totalReviews) * 100}%`,
                  backgroundImage: commentcolor.gradient,
                  height: "100%",
                  borderRadius: "20px",
                }}
              >
                <h3 className={commentcolor.text}>{starReviewCounts[4]}</h3>
              </div>
              <h3 className="absolute right-0">
                {starReviewCounts[4]} đánh giá
              </h3>
            </div>

            <div className="flex mt-2 relative">
              4
              {stars1.map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  color={commentcolor.orange}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              ))}
              <div
                style={{
                  width: `${(starReviewCounts[3] / totalReviews) * 100}%`,
                  backgroundImage: commentcolor.gradient,
                  height: "100%",
                  borderRadius: "20px",
                }}
              >
                <h3 className={commentcolor.text}>{starReviewCounts[3]}</h3>
              </div>
              <h3 className="absolute right-0">
                {starReviewCounts[3]} đánh giá
              </h3>
            </div>

            <div className="flex mt-2 relative">
              3
              {stars1.map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  color={commentcolor.orange}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              ))}
              <div
                style={{
                  width: `${(starReviewCounts[2] / totalReviews) * 100}%`,
                  backgroundImage: commentcolor.gradient,
                  height: "100%",
                  borderRadius: "20px",
                }}
              >
                <h3 className={commentcolor.text}>{starReviewCounts[2]}</h3>
              </div>
              <h3 className="absolute right-0">
                {starReviewCounts[2]} đánh giá
              </h3>
            </div>

            <div className="flex mt-2 relative">
              2
              {stars1.map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  color={commentcolor.orange}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              ))}
              <div
                style={{
                  width: `${(starReviewCounts[1] / totalReviews) * 100}%`,
                  backgroundImage: commentcolor.gradient,
                  height: "100%",
                  borderRadius: "20px",
                }}
              >
                <h3 className={commentcolor.text}>{starReviewCounts[1]}</h3>
              </div>
              <h3 className="absolute right-0">
                {starReviewCounts[1]} đánh giá
              </h3>
            </div>

            <div className="flex mt-2 relative">
              1
              {stars1.map((_, index) => (
                <Star
                  key={index}
                  size={24}
                  color={commentcolor.orange}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              ))}
              <div
                style={{
                  width: `${(starReviewCounts[0] / totalReviews) * 100}%`,
                  backgroundImage: commentcolor.gradient,
                  height: "100%",
                  borderRadius: "20px",
                }}
              >
                <h3 className={commentcolor.text}>{starReviewCounts[0]}</h3>
              </div>
              <h3 className="absolute right-0">
                {starReviewCounts[0]} đánh giá
              </h3>
            </div>
          </div>
        </div>

        <div className="my-4">
          <span className="text-lg">
            Rating: {rating !== null ? `${rating} stars` : "Not rated yet"}
          </span>
          <div className="flex space-x-2">
            {stars.map((_, index) => (
              <Star
                key={index}
                size={24}
                onClick={() => handleRatingChange(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue !== null || currentValue !== null) &&
                  (hoverValue !== null ? hoverValue : currentValue ?? 0) >=
                    index + 1
                    ? commentcolor.orange
                    : commentcolor.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
          {ratingError && <p className="text-red-500 text-sm">{ratingError}</p>}
          {commentError && (
            <p className="text-red-500 text-sm">{commentError}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Nhập nội dung đánh giá..........."
            className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
              commentError ? "border-red-500" : ""
            }`}
          />
        </div>

        {editingCommentId ? (
          <div className="flex space-x-4">
            <button
              onClick={handleUpdate}
              className={`text-white px-4 py-2 rounded `}
              style={{ backgroundImage: commentcolor.gradient }}
              onMouseOver={(event) => {
                event.currentTarget.style.backgroundImage =
                  commentcolor.gradienthover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundImage =
                  commentcolor.gradient;
              }}
            >
              Cập nhật
            </button>
            <button
              onClick={handleCancelEdit}
              className={`text-white px-4 py-2 rounded `}
              style={{ backgroundImage: commentcolor.gradient }}
              onMouseOver={(event) => {
                event.currentTarget.style.backgroundImage =
                  commentcolor.gradienthover;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundImage =
                  commentcolor.gradient;
              }}
            >
              Hủy
            </button>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            className={`text-white px-4 py-2 rounded `}
            style={{ backgroundImage: commentcolor.gradient }}
            onMouseOver={(event) => {
              event.currentTarget.style.backgroundImage =
                commentcolor.gradienthover;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.backgroundImage = commentcolor.gradient;
            }}
          >
            Đánh giá
          </button>
        )}

        {Object.entries(commentsByRating)
          .sort(([ratingA], [ratingB]) => parseInt(ratingB) - parseInt(ratingA))
          .map(([rating, comments]) => (
            <div key={rating}>
              {(collapsedComments ||
                rating === "5" ||
                rating === "4" ||
                rating === "3") && (
                <div className="mt-10">
                  <ul>
                    {comments
                      .filter((comment) => comment.nameproduct === data)
                      .sort((a, b) => b.rating - a.rating)
                      .map((comment, index) => (
                        <li key={index} className="mb-8">
                          <div className=" flex items-center relative">
                            <Image
                              src={comment.imageUrl}
                              alt=""
                              width="30"
                              height="30"
                              className="rounded-md"
                            />
                            <p className="ml-3 font-bold flex text-gray-600">
                              {comment.commenter}
                              <p className="text-sm text-gray-400 items-center font-normal hidden lg:flex">
                                -{comment.nameproduct}
                              </p>
                            </p>
                            {user && user.username === comment.commenter && (
                              <>
                                <button
                                  onClick={() =>
                                    handleDeleteComment(comment.id)
                                  }
                                  className="text-gray-800 text-opacity-60 ml-2 hover:text-gray-900"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleEditClick(comment.id)}
                                  className="text-gray-800 text-opacity-60 ml-2 hover:text-gray-900"
                                >
                                  <Pencil className="w-5 h-5" />
                                </button>
                              </>
                            )}
                            <p className=" absolute right-0 text-sm font-bold text-gray-800 text-opacity-60">
                              {formatTimestamp(comment.createdAt)}
                            </p>
                          </div>
                          <div className="bg-gray-100 mt-4 mb-2 rounded-md p-3 text-sm ml-12">
                            <p>Nhận xét: {comment.comment}</p>
                            {/* Format the date and time */}
                            <div className="flex space-x-2 items-center text-sm">
                              <p> Đánh giá: </p>
                              {stars.map((_, starIndex) => (
                                <Star
                                  key={starIndex}
                                  size={16}
                                  color={
                                    starIndex + 1 <= parseInt(rating, 10)
                                      ? commentcolor.orange
                                      : commentcolor.grey
                                  }
                                />
                              ))}
                            </div>
                          </div>
                          {comment.responses &&
                            comment.responses.length > 0 && (
                              <>
                                {showResponseComments === comment.id && (
                                  <ul>
                                    {comment.responses.map(
                                      (response, responseIndex) => (
                                        <li
                                          key={responseIndex}
                                          className="w-[90%] mx-auto"
                                        >
                                          {/* Render each response comment here */}
                                          <div className=" flex justify-end items-center relative">
                                            <div className=" w-full pl-[50px] ">
                                              <div className="float-left text-sm font-bold text-gray-800 text-opacity-60">
                                                {formatTimestamp(
                                                  response.createdAt
                                                )}
                                              </div>{" "}
                                              <p className="float-right font-bold mr-2 text-gray-600">
                                                {response.commenter}
                                              </p>{" "}
                                            </div>
                                            <Image
                                              src={response.imageUrl}
                                              alt=""
                                              width="30"
                                              height="30"
                                              className="rounded-md"
                                            />
                                            {user &&
                                              user.username ===
                                                comment.commenter && (
                                                <>
                                                  <button
                                                    onClick={() =>
                                                      handleDeleteCommentresponse(
                                                        comment.id,
                                                        response.id
                                                      )
                                                    }
                                                    className="text-gray-800 text-opacity-60 ml-2 hover:text-gray-900"
                                                  >
                                                    <Trash2 className="w-5 h-5" />
                                                  </button>
                                                  <button
                                                    onClick={() =>
                                                      handleResponseEditClick(
                                                        comment.id,
                                                        response.id
                                                      )
                                                    }
                                                    className="text-gray-800 text-opacity-60 ml-2 hover:text-gray-900"
                                                  >
                                                    <Pencil className="w-5 h-5" />
                                                  </button>
                                                </>
                                              )}
                                          </div>
                                          <div className="bg-gray-100 mt-2 mb-2 rounded-md p-3 text-sm ml-12">
                                            <p>
                                              Phản hồi: {response.description}
                                            </p>
                                          </div>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </>
                            )}
                          {showResponseForm === comment.id && (
                            <>
                              <div
                                className="mb-4"
                                key={`responseTextarea-${comment.id}`}
                              >
                                <textarea
                                  value={
                                    responseDescriptions[
                                      comment.id as string
                                    ] || ""
                                  }
                                  onChange={(e) => {
                                    // Update the correct response description for the current comment
                                    setResponseDescriptions(
                                      (prevDescriptions) => ({
                                        ...prevDescriptions,
                                        [comment.id as string]: e.target.value,
                                      })
                                    );
                                  }}
                                  placeholder="Nhập nội dung phản hồi..........."
                                  className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
                                    errorResponse ? "border-red-500" : ""
                                  }`}
                                />
                                {errorResponse && (
                                  <p className="text-red-500 text-sm">
                                    {errorResponse}
                                  </p>
                                )}
                              </div>

                              {editingResponseId ? (
                                <div className="flex space-x-4">
                                  <button
                                    onClick={() =>
                                      handleResponseUpdate(comment.id)
                                    }
                                    className={`text-white px-4 py-2 rounded `}
                                    style={{
                                      backgroundImage: commentcolor.gradient,
                                    }}
                                    onMouseOver={(event) => {
                                      event.currentTarget.style.backgroundImage =
                                        commentcolor.gradienthover;
                                    }}
                                    onMouseLeave={(event) => {
                                      event.currentTarget.style.backgroundImage =
                                        commentcolor.gradient;
                                    }}
                                  >
                                    Cập nhật
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleResponseCancelEdit(comment.id)
                                    }
                                    className={`text-white px-4 py-2 rounded `}
                                    style={{
                                      backgroundImage: commentcolor.gradient,
                                    }}
                                    onMouseOver={(event) => {
                                      event.currentTarget.style.backgroundImage =
                                        commentcolor.gradienthover;
                                    }}
                                    onMouseLeave={(event) => {
                                      event.currentTarget.style.backgroundImage =
                                        commentcolor.gradient;
                                    }}
                                  >
                                    Hủy
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleResponseSubmit(comment.id)
                                  }
                                  className={`text-white px-4 py-2 rounded `}
                                  style={{
                                    backgroundImage: commentcolor.gradient,
                                  }}
                                  onMouseOver={(event) => {
                                    event.currentTarget.style.backgroundImage =
                                      commentcolor.gradienthover;
                                  }}
                                  onMouseLeave={(event) => {
                                    event.currentTarget.style.backgroundImage =
                                      commentcolor.gradient;
                                  }}
                                >
                                  Phản hồi
                                </button>
                              )}
                            </>
                          )}
                          <EmojiPage
                            commentId={comment.id}
                            setShowResponseForm={setShowResponseForm}
                            setShowResponseComments={setShowResponseComments}
                            showResponseComments={showResponseComments}
                            responseComment={
                              comment.responses && comment.responses.length > 0
                            }
                            responsesLength={
                              comment.responses ? comment.responses.length : 0
                            }
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        <button
          onClick={() => {
            setCollapsedComments(!collapsedComments);
          }}
          className={`rounded px-2 md:px-28 md:py-2 py-1 mb-2 ml-[140px] md:ml-[220px] lg:ml-[512px]  ${
            collapsedComments ? " text-white" : "text-white"
          }`}
          style={{
            backgroundImage: collapsedComments
              ? commentcolor.gradienthover
              : commentcolor.gradient,
          }}
        >
          {collapsedComments ? "Thu gọn" : "Xem tất cả"}
        </button>
      </div>
    </Container>
  );
};

export default Comment;
