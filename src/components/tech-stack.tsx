export function TechStack() {
  return (
    <section className="flex flex-col gap-8 m-16">
      <div className="nes-container is-rounded with-title w-fit md:w-full">
        <h3 className="title mb-4 text-xl font-bold">Languages</h3>
        <div className="md:flex-row flex flex-col items-center justify-around gap-4">
          <div className="nes-badge">
            <span className=" is-primary">JS/TS</span>
          </div>
          <div className="nes-badge">
            <span className="is-warning">Java</span>
          </div>
          <div className="nes-badge">
            <span className="is-error">Python</span>
          </div>
          <div className="nes-badge">
            <span className="is-success">GoLang</span>
          </div>
        </div>
      </div>

      <div className="nes-container is-rounded with-title w-fit md:w-full">
        <h3 className="title mb-4 text-xl font-bold">Back-End</h3>
        <div className="md:flex-row flex flex-col items-center justify-around gap-4">
          <div className="nes-badge">
            <span className="is-success">Node</span>
          </div>
          <div className="nes-badge">
            <span className="is-primary">Spring</span>
          </div>
          <div className="nes-badge">
            <span className="is-warning">SQL</span>
          </div>
          <div className="nes-badge">
            <span className="is-error">Rest</span>
          </div>
        </div>
      </div>

      <div className="nes-container is-rounded with-title w-fit md:w-full">
        <h3 className="title mb-4 text-xl font-bold">Front-End</h3>
        <div className="md:grid md:grid-cols-4 md:place-items-center flex flex-col items-center gap-4">
          <div className="nes-badge">
            <span className="is-error">React</span>
          </div>
          <div className="nes-badge w-[180px]">
            <span className="is-success">React Native</span>
          </div>
          <div className="nes-badge">
            <span className="is-primary">Tailwind</span>
          </div>
          <div className="nes-badge">
            <span className="is-warning">Next</span>
          </div>
        </div>
      </div>

      <div className="nes-container is-rounded with-title w-fit md:w-full">
        <h3 className="title mb-4 text-xl font-bold">DevOps</h3>
        <div className="md:flex-row flex flex-col items-center justify-around gap-4">
          <div className="nes-badge">
            <span className="is-warning">Docker</span>
          </div>
          <div className="nes-badge">
            <span className="is-error">Azure</span>
          </div>
          <div className="nes-badge">
            <span className="is-success">AWS</span>
          </div>
          <div className="nes-badge">
            <span className="is-primary">Git/GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
