// import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export function PhoneDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-xl mb-4 text-black flex items-center justify-between">
          Call me maybe 🤙🏻
          <span className="text-xs text-gray-500"> ( ဘီယာတိုက်ရမှာနော် 😆 )</span>
        </div>


        <div className="text-sm mb-4 flex justify-end text-black">+959 965 887 7879</div>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>
          Okay Pr  -_-
        </button>
        </div>
      </div>
    </div>
  );
}


export function MailDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-xl mb-4 text-black"> somethingiswrongwithmyspacebar </div>
        <div className="text-sm mb-4 flex justify-end text-black">minhankyaw.mh@gmail.com</div>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>
          ar ar yr yr  -_-
        </button>
        </div>
      </div>
    </div>
  );
}

export function MoreDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="text-lg mb-4 text-black">ဘာညာ အာချောင်ချင်ရင် 😎</div>
        <div className="flex justify-center mb-4">
          <a className="bg-blue-500 w-12 h-9 rounded-lg m-2 flex items-center justify-center" href="https://www.facebook.com/novaroption/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="18" height="18">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 6.626 5.373 12 12 12 6.627 0 12-5.374 12-12 0-6.627-5.373-12-12-12zm5.648 6.51h-3.388c-.68 0-1.235.554-1.235 1.235v3.39h2.488l-.646 2.595H12.34v6.87H8.965v-6.87H6.122V9.34h2.843V6.175C8.965 3.095 10.573 1.41 13.658 1.41c.782 0 1.466.062 1.648.09v2.01z"/>
            </svg>
          </a>
          <a className="bg-blue-500 w-12 h-9 rounded-lg m-2 flex items-center justify-center" href="https://www.linkedin.com/in/min-han-kyaw-2a1455189/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="18" height="18">
              <path d="M3.862 18H.275V5.976h3.587V18zM2.068 4.727C.926 4.727 0 3.8 0 2.664s.926-2.063 2.068-2.063 2.068.927 2.068 2.063c0 1.137-.927 2.063-2.068 2.063zM18 18h-3.588v-5.404c0-1.288-.025-2.942-1.788-2.942-1.789 0-2.063 1.398-2.063 2.91V18H7.517V5.976h3.587v1.51h.05c.5-.948 1.72-1.946 3.542-1.946C16.139 5.54 18 7.607 18 11.067V18z"/>
            </svg>
          </a>
        </div>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>
          ‌အေးဆေးနေပါရစေ 🥲
        </button>
        </div>
      </div>
    </div>
  );
}