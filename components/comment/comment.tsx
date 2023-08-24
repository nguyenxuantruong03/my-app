"use client";
import axios from "axios";
import React, { useState, useEffect, ChangeEvent } from "react";
import { FaStar } from "react-icons/fa";

interface Comment {
  rating: number;
  comment: string;
  commenter: string;
  createdAt: string
}

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Comment = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [savedComments, setSavedComments] = useState<Comment[]>([]);
  const [commenters, setCommenters] = useState<string[]>([]);
  const [commentError, setCommentError] = useState<string>("");
  const [ratingError, setRatingError] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [commentsByRating, setCommentsByRating] = useState<{ [key: number]: Comment[] }>({});
  const [collapsedComments, setCollapsedComments] = useState<boolean>(false);
  const stars = Array(5).fill(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments');
        const fetchedComments: Comment[] = response.data;
        setSavedComments(fetchedComments);

        const uniqueCommenters: string[] = Array.from(
          new Set(fetchedComments.map((comment) => comment.commenter))
        );
        setCommenters(uniqueCommenters);

        const commentsByRating: { [key: number]: Comment[] } = fetchedComments.reduce(
          (acc, comment) => {
            if (acc[comment.rating]) {
              acc[comment.rating].push(comment);
            } else {
              acc[comment.rating] = [comment];
            }
            return acc;
          },
          {} as { [key: number]: Comment[] }
        );
        setCommentsByRating(commentsByRating);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleTimestampUpdate = () => {
    localStorage.setItem('lastCommentTime', Date.now().toString());
  };

  const canUserComment = () => {
    const lastCommentTime = localStorage.getItem('lastCommentTime');
    if (!lastCommentTime) {
      return true; // User hasn't commented before
    }

    const timeDifference = Date.now() - parseInt(lastCommentTime, 10);
    const minutesPassed  = timeDifference / (1000 * 60); // Convert milliseconds to hours

    return minutesPassed  >= 1;
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setCurrentValue(newRating);
    setRatingError("");
  };

  const handleCommentChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
    setCommentError("");
  };

  const handleSubmit = async () => {
    if (rating === null) {
      setRatingError('Please choose a star rating.');
      return;
    }

    if (comment.trim() === '') {
      setCommentError('Comment field is required.');
      return;
    }

    if (!canUserComment()) {
      setCommentError('You can only comment once every 1 minute.');
      return;
    }

    handleTimestampUpdate();

    const newComment = {
      rating: rating as number,
      comment,
      commenter: 'Anonymous', // Change this to the actual commenter's name
      createdAt: new Date()
    };

    try {
      const response = await axios.post('/api/comments', newComment);
      const savedComment: Comment = response.data;

      const updatedComments: Comment[] = [...savedComments, savedComment];
      setSavedComments(updatedComments);

      setRating(null);
      setCurrentValue(null);
      setComment('');
      setCommentError('');
      setRatingError('');

      if (!commenters.includes(savedComment.commenter)) {
        setCommenters([...commenters, savedComment.commenter]);
      }

      const updatedCommentsByRating: { [key: number]: Comment[] } = {
        ...commentsByRating,
        [savedComment.rating]: [...(commentsByRating[savedComment.rating] || []), savedComment],
      };
      setCommentsByRating(updatedCommentsByRating);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const totalCommenters = commenters.length;
  const totalReviews = savedComments.length;

  const starReviewCounts: number[] = [0, 0, 0, 0, 0];

  savedComments.forEach((savedComment) => {
    if (savedComment.rating >= 1 && savedComment.rating <= 5) {
      starReviewCounts[savedComment.rating - 1]++;
    }
  });

  const calculateAverageRating = () => {
    const totalStarsGiven = savedComments.reduce(
      (total, savedComment) => total + savedComment.rating,
      0
    );
    const totalReviews = savedComments.length;
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
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Rate and Comment</h2>
      <div className="mb-4">
        <span className="text-lg">
          Rating: {rating !== null ? `${rating} stars` : "Not rated yet"}
        </span>
        <div className="flex space-x-2">
          {stars.map((_, index) => (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleRatingChange(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue !== null || currentValue !== null) &&
                (hoverValue !== null ? hoverValue : currentValue ?? 0) >=
                  index + 1
                  ? colors.orange
                  : colors.grey
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
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>

      <h3>Average Rating: {calculateAverageRating().toFixed(1)}/5</h3>
      <h3>Total Number of Reviews: {totalReviews}</h3>
      <h3>Total Number of Commenters: {totalCommenters}</h3>

      <h3>Total 5-Star Reviewers: {starReviewCounts[4]}</h3>
      <h3>Total 4-Star Reviewers: {starReviewCounts[3]}</h3>
      <h3>Total 3-Star Reviewers: {starReviewCounts[2]}</h3>
      <h3>Total 2-Star Reviewers: {starReviewCounts[1]}</h3>
      <h3>Total 1-Star Reviewers: {starReviewCounts[0]}</h3>

      <h3>Comments by Rating</h3>
      
      {Object.entries(commentsByRating)
        .sort(([ratingA], [ratingB]) => parseInt(ratingB) - parseInt(ratingA))
        .map(([rating, comments]) => (
          <div key={rating}>
            {(collapsedComments || rating === "5") && (
              <div>
                <h4>Star: {rating}</h4>
                <ul>
                  {comments
                    .slice()
                    .sort((a, b) => b.rating - a.rating)
                    .map((comment, index) => (
                      <li key={index}>
                        <p>Commenter: {comment.commenter}</p>
                        <p>Comment: {comment.comment}</p>
                        <p>Posted: {new Date(comment.createdAt).toLocaleString('vi-VN')}</p> {/* Format the date and time */}
                        <div className="flex space-x-2">
                          {stars.map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={16}
                              color={
                                starIndex + 1 <= parseInt(rating, 10)
                                  ? colors.orange
                                  : colors.grey
                              }
                            />
                          ))}
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
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mb-2"
      >
        {collapsedComments ? "Thu gon" : "See all"}
      </button>
    </div>
  );
};

export default Comment;
