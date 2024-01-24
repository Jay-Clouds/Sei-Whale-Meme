import { useState } from "react";
import { CopyIcon } from "../assets/icons/Copyicon";

export const CopyToClipboard = ({ content, copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (event) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy content: ', err);
    }
  };

  return (
    <span onClick={copyToClipboard} className="cursor-pointer flex items-center">
      {isCopied ? 'Copied!' : (
        <>
          {copyText}
          <span className="ml-2">
            <CopyIcon />
          </span>
        </>
      )}
    </span>
  );
};