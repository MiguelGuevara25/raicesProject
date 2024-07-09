const SoundLock = ({ x, y, handle }) => {
  return (
    <div
      className={`absolute ${x} ${y} size-12 cursor-pointer`}
      onClick={handle}
    ></div>
  );
};

export default SoundLock;
