const DownloadButton = ({ href, buttonText }) => {
  return (
    <a href={href} download>
      {buttonText}
    </a>
  );
};

export default DownloadButton;
