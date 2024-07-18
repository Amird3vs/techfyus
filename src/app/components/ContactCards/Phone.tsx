import React from "react";
import { IconPhone, IconCopy } from "@tabler/icons-react";
import Swal from "sweetalert2";

const PhoneCard: React.FC = () => {
  const phoneNumber = "(+63) 969 276 0773";

  const copyToClipboard = (text: string): Promise<void> => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    } else {
      return new Promise((resolve, reject) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          document.body.removeChild(textArea);
          resolve();
        } catch (err) {
          document.body.removeChild(textArea);
          reject(err);
        }
      });
    }
  };

  const handleCopyClick = () => {
    copyToClipboard(phoneNumber)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Copied!",
          text: "Phone number copied to clipboard.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to copy the phone number.",
        });
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <li className="flex flex-row items-center gap-2 overflow-hidden">
      <IconPhone className="h-12 w-12 text-sky-500" />
      <div className="flex flex-col justify-center">
        <span className="text-[#808080] text-xs font-medium">
          Give us a call:
        </span>
        <div className="flex items-center">
          <p className="font-bold text-base dark:text-[#F6F6F6] hover:cursor-pointer">
            {phoneNumber}
          </p>
          <IconCopy
            className="h-5 w-5 text-slate-500 hover:text-sky-500 ml-3"
            onClick={handleCopyClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </li>
  );
};

export default PhoneCard;
