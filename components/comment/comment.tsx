"use client";
import axios from "axios";
import React, { useState, useEffect, ChangeEvent } from "react";
import Container from "../ui/container";
import Image from "next/image";
import {commentcolor} from "@/components/color/color"
import { useUser } from "@clerk/nextjs";
import { Star } from 'lucide-react';

interface Comment {
  rating: number;
  comment: string;
  commenter: string;
  createdAt: string;
  nameproduct: string;
  imageUrl: string
}
interface CommentProps {
  data: string;
}
const Comment: React.FC<CommentProps> = ({ data }) => {
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments`);
        const fetchedComments: Comment[] = response.data;
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
    const minutesPassed = timeDifference / (30000 * 60); // Convert milliseconds to hours

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
        commenter:user?.username || "Vô danh" , 
        createdAt: new Date().toISOString(),
        nameproduct: data ||"123"
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
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const calculateTotalReviews = () => {
    return savedComments.filter((comment) => comment.nameproduct === data).length;
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

  const renderStars = (integerPart : number, fractionalPart: number) => {
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
        <h2 className="text-xl font-semibold mb-4">Rate and Comment -{data}</h2>
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
            placeholder="Leave a comment..."
            className={`w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
              commentError ? "border-red-500" : ""
            }`}
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`text-white px-4 py-2 rounded `}
          style={{ backgroundImage: commentcolor.gradient }}
          onMouseOver={(event) => {
            event.currentTarget.style.backgroundImage = commentcolor.gradienthover;
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundImage = commentcolor.gradient;
          }}
        >
          Đánh giá
        </button>

        {Object.entries(commentsByRating)
          .sort(([ratingA], [ratingB]) => parseInt(ratingB) - parseInt(ratingA))
          .map(([rating, comments]) => (
            <div key={rating}>
              {(collapsedComments || rating === "5" || rating === "4"|| rating === "3") && (
                <div className="mt-10">
                  <ul>
                    {comments
                    .filter((comment) => comment.nameproduct === data)
                      .sort((a, b) => b.rating - a.rating)
                      .map((comment, index) => (
                        <li key={index} >
                          <div className=" flex items-center relative">
                            <Image
                              src={comment.imageUrl}
                              alt=""
                              width="30"
                              height="30"
                              className="rounded-md"
                            />
                            <p className="ml-3 font-bold flex">
                              {comment.commenter} <p className="text-sm text-gray-400 flex items-center font-normal ">-{comment.nameproduct}</p>
                            </p>
                              
                            <p className=" absolute right-0 text-sm font-bold text-gray-800 text-opacity-60">
                              {formatTimestamp(comment.createdAt)}
                            </p>
                          </div>
                          <div className="bg-gray-100 mt-4 mb-4 rounded-md p-2 text-sm ml-12">
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
            collapsedComments ? " text-gray-700 " : "text-white"
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
