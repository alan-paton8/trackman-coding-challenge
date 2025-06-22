function Icon({ name }: { name: string }) {
  return (
    <svg
      className="w-6 h-6 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`#${name}`} />
    </svg>
  );
}

export default Icon;
