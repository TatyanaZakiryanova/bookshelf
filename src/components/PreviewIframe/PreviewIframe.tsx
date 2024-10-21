import { useState } from 'react';

import Spinner from '../UI/Spinner/Spinner';

interface IPreviewIframe {
  viewerUrl: string;
}

const PreviewIframe = ({ viewerUrl }: IPreviewIframe) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <iframe
        src={viewerUrl}
        width="100%"
        height="600px"
        allowFullScreen
        title="Book Preview"
        onLoad={handleIframeLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      ></iframe>
    </>
  );
};

export default PreviewIframe;
