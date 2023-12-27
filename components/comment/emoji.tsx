"use client";
import "./emoji.scss";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff, MessageCircle, ThumbsUp } from "lucide-react";
import useEmojiSelection from "@/hooks/emoji";
import Image from "next/image";

interface EmojiProps {
  commentId: any;
  setShowResponseForm: React.Dispatch<React.SetStateAction<string | null>>;
  setShowResponseComments: React.Dispatch<React.SetStateAction<string | null>>;
  showResponseComments: string | null;
  responseComment: boolean | undefined;
  responsesLength: number;
}
const EmojiPage: React.FC<EmojiProps> = ({
  commentId,
  setShowResponseForm,
  showResponseComments,
  setShowResponseComments,
  responseComment,
  responsesLength
}) => {
  const { selectedEmoji, selectedEmojiLength, handleEmojiClick } =
    useEmojiSelection(commentId);
  const [recentlySelectedEmojis, setRecentlySelectedEmojis] = useState<
    string[]
  >([]);

  useEffect(() => {
    const likeLinks = document.querySelectorAll(".Like__link");
    if (likeLinks) {
      likeLinks.forEach((likeLink) => {
        likeLink.addEventListener("mouseenter", function () {
          likeLink.classList.remove("js-hover");
        });

        setTimeout(function () {
          likeLink.classList.remove("js-hover");
        }, 200);
      });
    }
  }, []);

  useEffect(() => {
    const storedEmojis = localStorage.getItem("recentlySelectedEmojis");
    if (storedEmojis) {
      setRecentlySelectedEmojis(JSON.parse(storedEmojis));
    }
  }, []);

  // Update the recently selected emojis and store them in local storage
useEffect(() => {
  setRecentlySelectedEmojis((prevEmojis) => {
    // If selectedEmojiLength is 0, set the emojis to an empty array
    if (selectedEmojiLength === 0) {
      const emptyArray: string[] = [];
      localStorage.setItem("recentlySelectedEmojis", JSON.stringify(emptyArray));
      return emptyArray;
    }

    const newEmojis = [selectedEmoji, ...prevEmojis].filter(Boolean) as string[];

    // Remove duplicates and update local storage only if the selected emoji has changed
    if (newEmojis.length > 1 && newEmojis[0] === newEmojis[1]) {
      newEmojis.shift();
    } else {
      // Sort the emojis based on their occurrences in descending order
      const sortedEmojis = newEmojis
        .reduce((acc, emoji) => {
          acc.set(emoji, (acc.get(emoji) || 0) + 1);
          return acc;
        }, new Map<string, number>())
        .entries();

      const sortedArray = Array.from(sortedEmojis)
        .sort((a, b) => b[1] - a[1])
        .map(([emoji]) => emoji);

      localStorage.setItem(
        "recentlySelectedEmojis",
        JSON.stringify(sortedArray.slice(0, 3))
      );
    }

    return newEmojis.slice(0, 1); // Display only the most recently selected emoji
  });
}, [selectedEmoji, selectedEmojiLength]);
  


  const mapEmojiToComponent = () => {
    // Check if selectedEmojiLength is greater than 0
    if (selectedEmojiLength > 0) {
      return recentlySelectedEmojis.slice(0,3).map((emoji, index) => (
        <div key={index}>{getEmojiComponent(emoji)}</div>
      ));
    }

    // If selectedEmojiLength is 0, return null (or any other default behavior you want)
    return null;
  };

  const getEmojiComponent = (emoji: string) => {
    switch (emoji) {
      case "like":
        return (
          <Image
            src="/icon-image/like-icon.png"
            alt=""
            width="19"
            height="19"
          />
        );
      case "love":
        return (
          <Image src="/icon-image/love.png" alt="" width="17" height="17" />
        );
      case "haha":
        return (
          <Image src="/icon-image/haha.png" alt="" width="18" height="18" />
        );
      case "wow":
        return (
          <Image src="/icon-image/wow-icon.png" alt="" width="17" height="17" />
        );
      case "sad":
        return (
          <Image src="/icon-image/sad.png" alt="" width="17" height="17" />
        );
      case "angry":
        return (
          <Image src="/icon-image/angry.png" alt="" width="17" height="17" />
        );
      default:
        return null;
    }
  };

  const mapEmojiChangeText = () => {
    if (selectedEmoji) {
      return (
        <div
          key={0}
          className="flex justify-center items-center text-gray-800 text-opacity-60"
        >
          {getEmojiChangeText(selectedEmoji)}
        </div>
      );
    }

    return (
      <div
        className="flex justify-center items-center text-gray-800 text-opacity-60"
        onClick={() => handleEmojiClick("like")}
      >
        <ThumbsUp className="w-5 h-5" />
        <kbd className="ml-1">Thích</kbd>
      </div>
    );
  };

  const getEmojiChangeText = (emoji: string) => {
    let emojiInfo;

    switch (emoji) {
      case "like":
        emojiInfo = {
          imageSrc: "/icon-image/like-icon.png",
          altText: "Thích",
          width: 27,
          height: 27,
          textColor: "#5890ff",
        };
        break;
      case "love":
        emojiInfo = {
          imageSrc: "/icon-image/love.png",
          altText: "Yêu",
          width: 25,
          height: 25,
          textColor: "#f25268",
        };
        break;
      case "haha":
        emojiInfo = {
          imageSrc: "/icon-image/haha.png",
          altText: "Haha",
          width: 26,
          height: 26,
          textColor: "#ffd972",
        };
        break;
      case "wow":
        emojiInfo = {
          imageSrc: "/icon-image/wow-icon.png",
          altText: "Wow",
          width: 25,
          height: 25,
          textColor: "#ffd972",
        };
        break;
      case "sad":
        emojiInfo = {
          imageSrc: "/icon-image/sad.png",
          altText: "Buồn",
          width: 25,
          height: 25,
          textColor: "#ffd972",
        };
        break;
      case "angry":
        emojiInfo = {
          imageSrc: "/icon-image/angry.png",
          altText: "Phẫn nộ",
          width: 25,
          height: 25,
          textColor: "orange", // Màu văn bản
        };
        break;
      default:
        return null;
    }

    return (
      <div
        key={emoji}
        style={{ color: emojiInfo.textColor }}
        className="flex justify-center items-center"
      >
        <Image
          src={emojiInfo.imageSrc}
          alt={emojiInfo.altText}
          width={emojiInfo.width}
          height={emojiInfo.height}
        />
        <kbd className="ml-2">{emojiInfo.altText}</kbd>
      </div>
    );
  };

  return (
    <>
      <div className="flex ml-12 items-center mb-2 border-b-2 ">
        {mapEmojiToComponent()}
        <p className="ml-1 text-[#7f8286]"> {selectedEmojiLength}</p>
        <div className="ml-3 flex item-center text-[#7f8286]">{responsesLength} phản hồi</div>
      </div>
      <div className="flex items-center ">
        <div className="Like">
          <a className="Like__link js-hover">{mapEmojiChangeText()}</a>
          <div className="Emojis">
            <div
              className="Emoji Emoji--like"
              onClick={() => handleEmojiClick("like")}
            >
              <div className="icon icon--like"></div>
            </div>
            <div
              className="Emoji Emoji--love "
              onClick={() => handleEmojiClick("love")}
            >
              <div className="icon icon--heart"></div>
            </div>
            <div
              className="Emoji Emoji--haha"
              onClick={() => handleEmojiClick("haha")}
            >
              <div className="icon icon--haha"></div>
            </div>
            <div
              className="Emoji Emoji--wow"
              onClick={() => handleEmojiClick("wow")}
            >
              <div className="icon icon--wow"></div>
            </div>
            <div
              className="Emoji Emoji--sad"
              onClick={() => handleEmojiClick("sad")}
            >
              <div className="icon icon--sad"></div>
            </div>
            <div
              className="Emoji Emoji--angry"
              onClick={() => handleEmojiClick("angry")}
            >
              <div className="icon icon--angry"></div>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            setShowResponseForm((prev) =>
              prev === commentId ? null : commentId
            )
          }
          className="flex items-center text-gray-800 text-opacity-60 ml-2 hover:text-gray-900 hover:bg-[#a9a9a94d] hover:rounded-md hover:py-2 px-8 "
        >
          <MessageCircle className="w-5 h-5 mr-1" /> Phản hồi
        </button>

        {responseComment && (
        <button
          onClick={() =>
            setShowResponseComments((prevCommentId) =>
              prevCommentId === commentId ? null : commentId
            )
          }
          className="flex items-center text-gray-800 text-opacity-60 ml-2 hover:text-gray-900 hover:bg-[#a9a9a94d] hover:rounded-md hover:py-2 px-8 "
        >
         {showResponseComments === commentId ? (
          <span className="flex items-center">
            <EyeOff className="w-5 h-5 mr-1"/>
            Ẩn phản hồi
          </span>
        ) : (
          <span className="flex items-center">
            <Eye className="w-5 h-5 mr-1"/> 
            Xem phản hồi
          </span>
        )}
        </button>
        )}

      </div>
    </>
  );
};

export default EmojiPage;
