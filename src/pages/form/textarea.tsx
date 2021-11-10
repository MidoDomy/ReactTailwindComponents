import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import FormTextarea from 'components/Forms/Textarea';

const TextareaPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <h1>Textarea</h1>
      <p className="mb-10">.</p>

      <section>
        <h2 className="mb-5">Import</h2>
        <p>import FormTextarea from 'components/Forms/Textarea'</p>
        <p className="mb-10">import Form from 'components/Forms/Form'</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormTextarea placeholder="Textarea example" />
          </div>
          
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormTextarea</span>
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Textarea example</span>'
                    </span>
                    &gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextareaPage;
