import Link from 'next/link';

interface CardProps {
  title: string;
  dir: string;
}

export function Card({ title, dir }: CardProps) {
  return (
    <Link
      href={dir}
      className="nes-container is-dark member-card nes-pointer lg:w-25 flex flex-col items-center w-full"
      target="_blank"
    >
      <div className="lg:flex-row lg:justify-center flex flex-col items-center justify-center gap-3">
        <div>
          <i className="snes-logo"></i>
        </div>

        <p className="text-xs text-center">{title}</p>
      </div>
    </Link>
  );
}
