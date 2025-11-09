export default function Page() {
  return (
    <div>
      <section className="hero" id="what-is-ai">
        <span className="badge">AI 101</span>
        <h1>What is Artificial Intelligence (AI)?</h1>
        <p>
          Artificial Intelligence (AI) is the field of building systems that perform tasks
          which typically require human intelligence?like understanding language, recognizing
          patterns, making predictions, or taking actions to achieve goals.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h3>Core idea</h3>
            <p>
              Create agents that perceive, reason, and act?optimizing outcomes under uncertainty.
            </p>
          </div>
          <div className="card">
            <h3>Key ingredients</h3>
            <p>Data, models, objectives, feedback, and compute.</p>
          </div>
          <div className="card">
            <h3>Why now?</h3>
            <p>Massive data + scalable models + GPUs = practical AI at scale.</p>
          </div>
        </div>
      </section>

      <section className="section" id="types">
        <h2>Common types of AI</h2>
        <ul>
          <li>
            <strong>Machine Learning (ML)</strong>: models learn patterns from data to make predictions
            or decisions without being explicitly programmed for each rule.
          </li>
          <li>
            <strong>Deep Learning</strong>: neural networks with many layers that excel at
            perception tasks (vision, speech) and generation (text, images, code).
          </li>
          <li>
            <strong>Natural Language Processing (NLP)</strong>: systems that understand and generate
            human language, e.g. chatbots and translation.
          </li>
          <li>
            <strong>Reinforcement Learning (RL)</strong>: agents learn to act via trial-and-error to
            maximize reward signals.
          </li>
          <li>
            <strong>Symbolic/Knowledge-based AI</strong>: explicit rules and knowledge graphs for
            precise reasoning and constraints.
          </li>
        </ul>
      </section>

      <section className="section" id="history">
        <h2>Brief history</h2>
        <p>
          The term ?Artificial Intelligence? was coined at the 1956 Dartmouth workshop. Progress has come in waves:
          early symbolic systems (1950s?70s), expert systems (1980s), statistical learning (1990s?2000s), and modern
          deep learning (2012?present) culminating in large-scale foundation models.
        </p>
      </section>

      <section className="section" id="uses">
        <h2>Where AI is used</h2>
        <ul>
          <li>Search, recommendations, and ranking</li>
          <li>Computer vision: quality control, medical imaging, autonomous systems</li>
          <li>Language: support agents, summarization, translation, coding assistance</li>
          <li>Forecasting and optimization in logistics, energy, and finance</li>
          <li>Creative tools for text, image, audio, and video generation</li>
        </ul>
      </section>

      <section className="section" id="faq">
        <h2>FAQ</h2>
        <details>
          <summary>Is AI the same as AGI?</summary>
          <p>No. AGI refers to broadly capable systems across many domains. Today?s AI is
          powerful but typically specialized or narrow.</p>
        </details>
        <details>
          <summary>How do modern AI systems work?</summary>
          <p>Most learn from data via optimization?adjusting parameters to minimize error or maximize reward.</p>
        </details>
        <details>
          <summary>Are AI systems always correct?</summary>
          <p>No. Models can be biased, uncertain, or hallucinate. Careful evaluation and safeguards are essential.</p>
        </details>
      </section>

      <section className="section">
        <p>
          Learn more from <a className="link" href="https://ai.stanford.edu/" target="_blank" rel="noreferrer">Stanford AI</a>,
          <a className="link" href="https://www.deeplearningbook.org/" target="_blank" rel="noreferrer">Deep Learning Book</a>, and
          <a className="link" href="https://openai.com/research" target="_blank" rel="noreferrer">OpenAI Research</a>.
        </p>
      </section>
    </div>
  );
}
