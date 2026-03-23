import ImgLogo from 'images/img-logo-light-sm.svg';

const PlayThumbnailFallBack = ({ playName }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img alt={playName} src={ImgLogo} />
      <span>{playName}</span>
    </div>
  );
};

export default PlayThumbnailFallBack;
