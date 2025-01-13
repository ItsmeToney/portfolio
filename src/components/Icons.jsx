/* eslint-disable react/prop-types */
export default function Icons({ Icon, color, size }) {
  const { sm, lg } = { ...size };
  const classNames = [sm ? `text-${sm}` : "", lg ? `text-${lg}` : ""].join(" ");
  return <Icon style={{ color }} className={classNames} />;
}
