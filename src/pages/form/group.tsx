import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Form from 'components/Forms/Form';

const GroupPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <h1>Group</h1>
      <p className="mb-10">.</p>

      <section>
        <h2 className="mb-5">Import</h2>
        <p className="mb-3">
          import FormGroup from 'components/Forms/Group'
          <br />
          import FormGroupText from 'components/Forms/GroupText' - to use group text
        </p>
        <p className="mb-10">import Form from 'components/Forms/Form'</p>

        <div className="mb-10 example">
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">FormGroup</span>&gt;
                  </span>

                  <div className="level">
                    {`{/* Put your components in here */}`}
                  </div>
                    
                  <span className="code-tag component">
                    &lt;/<span className="component-tag-name">FormGroup</span>&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Group</span>&gt;
                  </span>

                  <div className="level">
                    {`{/* Put your components in here */}`}
                  </div>
                    
                  <span className="code-tag component">
                    &lt;/<span className="component-tag-name">Form.Group</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Multiple inputs</h2>
        <p className="mb-10">These are all form elements, and you can access them with Form tag.</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <Form.Group>
              <Form.Input placeholder="Email name" />
              <Form.GroupText>@</Form.GroupText>
              <Form.Input placeholder="Email service" />
              <Form.GroupText>.com</Form.GroupText>
            </Form.Group>
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Group</span>&gt;
                  </span>

                  <div className="level">
                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Form.Input</span>
                        
                      <span className="component-atr">
                        placeholder='
                        <span className="component-atr-value">Email name</span>'
                      </span>
                      /&gt;
                    </span>

                    <span className="code-tag">
                      &lt;<span className="component-tag-name">Form.GroupText</span>&gt;
                    </span>

                    <span className="code-content">@</span>

                    <span className="code-tag">
                      &lt;/<span className="component-tag-name">Form.GroupText</span>&gt;
                    </span>

                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Form.Input</span>
                        
                      <span className="component-atr">
                        placeholder='
                        <span className="component-atr-value">Email service</span>'
                      </span>
                      /&gt;
                    </span>

                    <span className="code-tag">
                      &lt;<span className="component-tag-name">Form.GroupText</span>&gt;
                    </span>

                    <span className="code-content">.com</span>

                    <span className="code-tag">
                      &lt;/<span className="component-tag-name">Form.GroupText</span>&gt;
                    </span>
                  </div>

                  <span className="code-tag component">
                    &lt;/<span className="component-tag-name">Form.Group</span>&gt;
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

export default GroupPage;
