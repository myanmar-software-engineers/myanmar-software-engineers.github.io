export default function Photos() {
  return (
    <div className="w-full shadow-fb bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-fBlack">Photos</div>
        <button className="focus:outline-none text-fBlue">
          See All Photos
        </button>
      </div>
      <div className="grid grid-cols-1 gap-1.5 mt-4">
        <img
          src="https://drive.google.com/uc?export=view&id=1PLWkCheRRnO5pQarOy-GtDcDTnyaHGgk"
          className="rounded-tl"
          alt="photo"
        />
        <hr></hr>
        <img src="https://drive.google.com/uc?export=view&id=1GPV-8qJKPa396NMBiw4Dk-GBirkNqbqE" alt="photo" />
       
      </div>
    </div>
  );
}
