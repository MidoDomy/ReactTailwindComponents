import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import FormSelect from 'components/Forms/Select';

const SelectPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <h1>Select</h1>
      <p className="mb-10">.</p>

      <section>
        <h2 className="mb-5">Import</h2>
        <p>import FormSelect from 'components/Forms/Select'</p>
        <p className="mb-10">import Form from 'components/Forms/Form'</p>
      </section>

      <section>
        <h2 className="mb-5">Example</h2>
        <p className="mb-10"></p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormSelect options={[{value: 1, name: "One"}, {value: 2, name: "Two"}, {value: 3, name: "Three"}]} />
          </div>
          
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormSelect</span>
                          
                    <span className="component-atr">
                      options={`{[{value: 1, name: "`}
                      <span className="component-atr-value">One</span>
                      {`"}, {value: 2, name: "`}
                      <span className="component-atr-value">Two</span>
                      {`"}, {value: 3, name: "`}
                      <span className="component-atr-value">Three</span>
                      {`"}]}`}
                    </span>
                    &gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Sizes</h2>
        <p className="mb-10">There are also several sizes.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormSelect size="sm" options={[{value: 1, name: "One"}, {value: 2, name: "Two"}]} />
            <br />
            <FormSelect size="md" options={[{value: 1, name: "One"}, {value: 2, name: "Two"}]} />
            <br />
            <FormSelect size="lg" options={[{value: 1, name: "One"}, {value: 2, name: "Two"}]} />
          </div>
          
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormSelect</span>
                          
                    <span className="component-atr">
                      size='
                      <span className="component-atr-value">sm</span>'
                    </span>
                          
                    <span className="component-atr">
                      options={`{[{value: 1, name: "`}
                      <span className="component-atr-value">One</span>
                      {`"}, {value: 2, name: "`}
                      <span className="component-atr-value">Two</span>
                      {`"}]}`}
                    </span>
                    &gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormSelect</span>
                          
                    <span className="component-atr">
                      size='
                      <span className="component-atr-value">md</span>'
                    </span>
                          
                    <span className="component-atr">
                      options={`{[{value: 1, name: "`}
                      <span className="component-atr-value">One</span>
                      {`"}, {value: 2, name: "`}
                      <span className="component-atr-value">Two</span>
                      {`"}]}`}
                    </span>
                    &gt;
                  </span>
                </div>
                
                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormSelect</span>
                          
                    <span className="component-atr">
                      size='
                      <span className="component-atr-value">lg</span>'
                    </span>
                          
                    <span className="component-atr">
                      options={`{[{value: 1, name: "`}
                      <span className="component-atr-value">One</span>
                      {`"}, {value: 2, name: "`}
                      <span className="component-atr-value">Two</span>
                      {`"}]}`}
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

export default SelectPage;
