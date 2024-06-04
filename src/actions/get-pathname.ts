import { headers } from 'next/headers';

export const getServerPathName = () => {
  const headersList = headers();
  const referer = headersList.get('referer') || '/';

  const urlSearchParams = new URLSearchParams(referer);

  console.log(urlSearchParams);

  return urlSearchParams.get('pathname') || '/';
};
