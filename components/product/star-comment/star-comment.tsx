"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { commentcolor } from "@/components/color/color";
import { Star } from "lucide-react";

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
const CommentStar: React.FC<CommentProps> = ({ data },) => {
  const [savedComments, setSavedComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/comments`);
            const fetchedComments: Comment[] = response.data;
            setSavedComments(fetchedComments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };
    fetchComments();
}, []);

  

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
            marginRight: 3,
          }}
          stroke="rgb(255, 186, 90)"
          fill="rgb(255, 186, 90)"
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
            marginRight: 3,
            clipPath: `polygon(0 0, ${fractionalPart * 100}% 0, ${
              fractionalPart * 100
            }% 100%, 0% 100%)`,
          }}
          stroke="rgb(255, 186, 90)"
          fill="rgb(255, 186, 90)"
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
            marginRight: 3,
          }}
          stroke="rgb(169, 169, 169)"
          fill="rgb(169, 169, 169)"
        />
      );
    }
    return starElements;
  };

    return (
      <div className="flex items-center justify-center px-1 pb-2">
        {totalReviews > 0 ? (
          <>
          <span className="text-xs font-semibold md:text-base md:mr-2">Đánh giá: </span>
          {renderStars(
            Math.floor(calculateAverageRating(data)),
            calculateAverageRating(data) % 1
          )}
          </>
        ) : (
          <></>
        )}
      </div>
    );
};

export default CommentStar;
