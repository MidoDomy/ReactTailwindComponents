import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import FormLabel from 'components/Forms/Label';
import Table from 'components/Table/Table';

const LabelPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])
  
  // const sizes = ['sm', 'md', 'lg'];

  return (
    <div>
      <h1>Label</h1>
      <p className="mb-10">.</p>

      <Table className="w-3/4 mb-20" headers={[{name: 'Attribute'}, {name: 'Type'}, {name: 'Values'}, {name: 'Default'}, {name: 'Required'}]}
        data={[
          {
            atr: 'className',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'label',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'htmlFor',
            type: 'string',
            value: '',
            default: '',
            required: false
          }
        ]}
      />

      <section>
        <h2 className="mb-5">Import</h2>
        <p>import FormLabel from 'components/Forms/Label'</p>
        <p className="mb-10">import Form from 'components/Forms/Form'</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormLabel label="Label example" />
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">FormLabel</span>
                          
                    <span className="component-atr">
                      label='
                      <span className="component-atr-value">Label with FormLabel import</span>'
                    </span>
                    /&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Label</span>
                          
                    <span className="component-atr">
                      label='
                      <span className="component-atr-value">Label with Form import</span>'
                    </span>
                    /&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Usage</h2>
        <p className="mb-10">There are two ways to print label, via attribute or via children.</p>

        <div className="example">
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Label</span>
                          
                    <span className="component-atr">
                      label='
                      <span className="component-atr-value">Label via attribute</span>'
                    </span>
                    /&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">Form.Label</span>&gt;
                  </span>

                  <span className="code-content">Label via children</span>
                    
                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Form.Label</span>&gt;
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

export default LabelPage;
