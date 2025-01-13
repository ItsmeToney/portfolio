/* eslint-disable react/prop-types */
export default function Icons({ Icon, color, size }) {
  const { sm, lg } = { ...size };
  return <Icon style={{ color }} className={` text-${sm} lg:text-${lg}`} />;
}
