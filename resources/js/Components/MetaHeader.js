import { Head } from "@inertiajs/inertia-react";

const MetaHeader = ({title='iRab Analytics Invest Trend', description='ระบบช่วยวิเคราะห์แนวโน้ม'}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaHeader;
