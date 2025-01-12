export function TechStack() {
  return (
    <section className="flex flex-col gap-3 m-16">
      <div>
        <h3 className="mb-4 text-xl font-bold">Languages.</h3>
        <div className="nes-container is-rounded w-fit md:w-full">
          <div className="md:grid-cols-4 grid grid-cols-1">
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
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Back-End.</h3>
        <div className="nes-container is-rounded w-fit md:w-full">
          <div className="md:grid-cols-4 grid grid-cols-1">
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
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Front-End.</h3>
        <div className="nes-container is-rounded w-fit md:w-full">
          <div className="md:grid-cols-4 grid grid-cols-1">
            <div className="nes-badge">
              <span className="is-error">React</span>
            </div>
            <div className="nes-badge w-[165px]">
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
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">DevOps.</h3>
        <div className="nes-container is-rounded w-fit md:w-full">
          <div className="md:grid-cols-4 grid grid-cols-1">
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
      </div>

      {/* <div className="lists">
          <ul className="nes-list is-circle">
            <li>TypeScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>Node (express, fastify, nest)</li>
            <li>React</li>
            <li>Spring</li>
          </ul>
        </div>

        <div className="lists">
          <ul className="nes-list is-circle">
            <li>DSA</li>
            <li>SQL</li>
            <li>Jest | JUnit</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Azure</li>
          </ul>
        </div> */}
    </section>
  );
}
