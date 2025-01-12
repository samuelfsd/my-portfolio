import Link from 'next/link';

export function AboutMe() {
  return (
    <section className="md:gap-8 md:justify-around md:flex-row flex flex-col items-center gap-16 mx-16 mt-32">
      <div className="nes-container is-rounded flex flex-col justify-between lg:h-[430px] w-fit gap-8">
        <div className="lists">
          <ul className="nes-list is-disc flex flex-col gap-4">
            <li>
              I&apos;m Samuel, 22 years old, love soccer and Botafogo, a
              technology enthusiast.
            </li>
            <li>
              Computer science graduate and master&apos;s student in computer
              science (focus on information systems and databases).
            </li>
            <li>
              I&apos;ve been working as a software engineer professionally for
              over 3 years.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/samuelfsd/" target="_blank">
              <i className="nes-icon linkedin is-large"></i>
            </Link>
            <Link href="mailto:samuelfsd.dev@gmail.com" target="_blank">
              <i className="nes-icon gmail is-large"></i>
            </Link>
            <Link href="https://github.com/samuelfsd" target="_blank">
              <i className="nes-icon github is-large"></i>
            </Link>
          </div>

          {/* @TODO: add my cv to possible download */}
          {/* <button type="button" className="nes-btn is-primary">
            Download my CV
          </button> */}
        </div>
      </div>

      <div className="flex flex-col items-start self-end">
        <p className="nes-balloon from-left">
          Hello, please give me more food.
        </p>
        <i className="nes-octocat animate"></i>
      </div>
    </section>
  );
}
