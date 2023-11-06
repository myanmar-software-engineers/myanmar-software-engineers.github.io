/* eslint-disable @next/next/no-img-element */
import { More,Like,CommentButton }  from "./icons";

export default function MainPost() {
  return (
    <div>
      <div className="w-full shadow-fb rounded-lg bg-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
            src="https://drive.google.com/uc?export=view&id=1N1-Wu9SeVi5Mscl3elGopCnLDq3j_dNZ"
              // src="https://picsum.photos/id/1025/500"
              alt="img"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="ml-4">
              <a href="https://www.facebook.com/novaroption/" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-bold text-black">Min Han Kyaw</a>{' '}

              {/* <span className="cursor-pointer font-bold text-black">Min Han Kyaw</span>{' '} */}
              <span className="text-fGrey text-opacity-80 text-sm text-black">
              was with{' '}
              </span>
              <span className="cursor-pointer font-bold text-black">ဇူကာဘတ်</span>{' '}
              <br />
              <span className="text-fGrey text-opacity-50 text-sm text-black">
                {' '}
                November 05, 2023{' '}
              </span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none">
            <More />
          </button>
        </div>
        <div className="w-full mt-4 text-black">
          My Everday life as a Software Engineer :3
        </div>
        <img
        // https://drive.google.com/file/d/1hhnE0l2HBLkjtp6twCi7pHIRl65H9-s4/view?usp=share_link
          src="https://drive.google.com/uc?export=view&id=1hhnE0l2HBLkjtp6twCi7pHIRl65H9-s4"
          alt="photo"
          className="w-full h-full object-cover mt-4 rounded"
        />
        <div className="flex justify-between mt-4 items-center text-fGrey text-opacity-50">
          <div className="text-black text-sm">1.5k Loves</div>
          <div className="text-black text-sm">1.5k Comments</div>
        </div>
        <div className="border border-fGray border-opacity-100 mt-4" />
        <div className="flex justify-between items-center mt-4">
          <button className="w-1/2 flex items-center justify-center focus:outline-none">
            <Like />
            <span className="ml-1 text-black ">Love</span>
          </button>
          <button className="w-1/2 flex items-center justify-center focus:outline-none">
            <CommentButton />
            <span className="ml-1 text-black ">a thel ly twy py pr</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
