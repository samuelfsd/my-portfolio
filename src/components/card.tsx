import Link from 'next/link';

interface CardProps {
  title: string;
  dir: string;
}

export function Card({ title, dir }: CardProps) {
  return (
    <Link
      href={dir}
      className="nes-container is-dark member-card nes-pointer"
      target="_blank"
    >
      <div className="w-[350px] flex items-center justify-between gap-3 ">
        <div>
          <i className="snes-logo"></i>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-nowrap">{title}</p>
          <i className="nes-icon is-large star"></i>
        </div>
      </div>
    </Link>
  );
}
