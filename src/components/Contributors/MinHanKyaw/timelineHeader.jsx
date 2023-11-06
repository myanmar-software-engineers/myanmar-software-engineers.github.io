/* eslint-disable @next/next/no-img-element */
import { Phone, DownArrow, Friend,More }  from "./icons";
import { PhoneDialog,MailDialog,MoreDialog } from './dialog';
import React, { useState } from 'react';

export default function TimelineHeader() {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const [isMailDialogOpen, setIsMailDialogOpen] = useState(false);
  const [isMoreDialogOpen, setIsMoreDialogOpen] = useState(false);

  const handlePhoneClick = () => {
    setIsPhoneDialogOpen(true);
  };

  const handleClosePhoneDialog = () => {
    setIsPhoneDialogOpen(false);
  };

  const handleMailClick = () => {
    setIsMailDialogOpen(true);
  };

  const handleCloseMailDialog = () => {
    setIsMailDialogOpen(false);
  };

  const handleMoreClick = () => {
    setIsMoreDialogOpen(true);
  };

  const handleCloseMoreDialog = () => {
    setIsMoreDialogOpen(false);
  };
  return (
    <div className="px-44">
      <div className="relative h-96 rounded-b flex justify-center">
        <img
          src="https://drive.google.com/uc?export=view&id=1emxXLc4aJALK5zeOkyi1vB8xQBzRYm_a"
          className="object-cover w-full h-full rounded-b"
          alt="cover"
        />
        <div className="absolute -bottom-6">
          <img
            src="https://drive.google.com/uc?export=view&id=1N1-Wu9SeVi5Mscl3elGopCnLDq3j_dNZ"
            className="object-cover border-4 border-white w-40 h-40 rounded-full"
            alt="profile"
          />
        </div>
      </div>
      <div className="text-center mt-6 text-3xl font-bold text-black">
        Min Han Kyaw
      </div>
   
      <div className="border border-gray-500 mt-6 border-opacity-10" />
      <div className="flex justify-between px-8">
        <div className="flex items-center">
          <div className="text-blue-500 px-4 py-5 border-b-4 border-blue-500">
            Posts
          </div>
          <div className="px-4 py-5 text-gray-500">
            Friends <span className="text-sm ml-1">606</span>
          </div>
          <div className="px-4 py-5 text-gray-500">Photos</div>
          <div className="px-4 py-5 text-gray-500">Videos</div>
          <div className="px-4 py-5 text-gray-500">Check-Ins</div>
          <div className="px-4 flex items-center py-5 text-gray-500">
            More
            <span className="ml-1">
              <DownArrow borderColor="#606770" />
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4 mb-4">

          <button
            className="bg-gray-200 w-12 h-9 rounded-lg flex items-center justify-center focus:outline-none"
            onClick={handlePhoneClick}
          >
            <Phone />
          </button>
          <button
             className="bg-gray-200 w-12 h-9 rounded-lg flex items-center justify-center focus:outline-none"
            onClick={handleMailClick}
          >
            <Friend />
          </button>
          <button
            className="bg-gray-200 w-12 h-9 rounded-lg flex items-center justify-center focus:outline-none"
            onClick={handleMoreClick}
          >
            <More />
          </button>
          <PhoneDialog isOpen={isPhoneDialogOpen} onClose={handleClosePhoneDialog} />
          <MailDialog isOpen={isMailDialogOpen} onClose={handleCloseMailDialog} />
          <MoreDialog isOpen={isMoreDialogOpen} onClose={handleCloseMoreDialog} />
        </div>
      </div>
    </div>
  );
}
