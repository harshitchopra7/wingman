import React from "react";

function ChatIcon({ height = 20, width = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3125 1.875C8.24119 1.87727 6.25538 2.70111 4.79074 4.16574C3.32611 5.63038 2.50227 7.61619 2.5 9.6875V16.2758C2.50041 16.6003 2.62953 16.9115 2.85902 17.141C3.08852 17.3705 3.39966 17.4996 3.72422 17.5H10.3125C12.3845 17.5 14.3716 16.6769 15.8368 15.2118C17.3019 13.7466 18.125 11.7595 18.125 9.6875C18.125 7.6155 17.3019 5.62836 15.8368 4.16323C14.3716 2.6981 12.3845 1.875 10.3125 1.875ZM12.5 11.875H7.5C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25C6.875 11.0842 6.94085 10.9253 7.05806 10.8081C7.17527 10.6908 7.33424 10.625 7.5 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 9.375H7.5C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75C6.875 8.58424 6.94085 8.42527 7.05806 8.30806C7.17527 8.19085 7.33424 8.125 7.5 8.125H12.5C12.6658 8.125 12.8247 8.19085 12.9419 8.30806C13.0592 8.42527 13.125 8.58424 13.125 8.75C13.125 8.91576 13.0592 9.07473 12.9419 9.19194C12.8247 9.30915 12.6658 9.375 12.5 9.375Z"
        fill="#8A94A6"
      />
    </svg>
  );
}

export default ChatIcon;
