import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import FormLabel from 'components/Forms/Label';
import FormInput from 'components/Forms/Input';
import Table from 'components/Table/Table';

const InputPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])
  
  const sizes = ['sm', 'md', 'lg'];

  return (
    <div>
      <h1>Input</h1>
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
            atr: 'id',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'name',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'value',
            type: 'string | number',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'placeholder',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'size',
            type: 'string',
            value: 'sm | md | lg',
            default: 'md',
            required: false
          },
          {
            atr: 'type',
            type: 'string',
            value: '',
            default: 'text',
            required: false
          },
          {
            atr: 'disabled',
            type: 'boolean',
            value: 'true | false',
            default: 'false',
            required: false
          },
          {
            atr: 'readonly',
            type: 'boolean',
            value: 'true | false',
            default: 'false',
            required: false
          },
          {
            atr: 'required',
            type: 'boolean',
            value: 'true | false',
            default: 'false',
            required: false
          },
          {
            atr: 'onChange',
            type: 'function',
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
            <FormInput placeholder="Input example" />
          </div>
          
          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">FormInput</span>
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Input with FormInput import</span>'
                    </span>
                    &gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag">
                    &lt;<span className="component-tag-name">Form.Input</span>
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Input with Form import</span>'
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
        <h2>With label</h2>
        <p className="mb-10">Asign label to your input</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormLabel label="Label" htmlFor="example" />
            <FormInput id="example" placeholder="Input with label" />
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Label</span>
                          
                    <span className="component-atr">
                      label='
                      <span className="component-atr-value">Label</span>'
                    </span>
                    &gt;
                  </span>
                  
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Input</span>
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Input with label</span>'
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
            <FormInput size='sm' placeholder="Input sm" />
            <br />
            <FormInput size='md' placeholder="Input md (default)" />
            <br />
            <FormInput size='lg' placeholder="Input lg" />
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                {sizes.map((size, index) => (
                  <div className="level" key={index}>
                    <span className="code-tag">
                      &lt;
                      <span className="component-tag-name">Form.Input</span>

                      <span className="component-atr">
                        size='
                        <span className="component-atr-value">{size}</span>'
                      </span>

                      <span className="component-atr">
                        placeholder='
                        <span className="component-atr-value">Input {size}</span>'
                      </span>
                      /&gt;
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Disabled, readonly and required</h2>
        <p className="mb-10">Disabled input styles.</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormInput placeholder="Disabled input" disabled />
            <br />
            <FormInput placeholder="Readonly input" readonly />
            <br />
            <FormInput placeholder="Required input" required />
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Input</span>     
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Disabled input</span>'
                    </span>
                          
                    <span className="component-atr">
                      disabled
                    </span> 
                    /&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Input</span>     
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Readonly input</span>'
                    </span>
                          
                    <span className="component-atr">
                      readonly
                    </span> 
                    /&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Input</span>     
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Required input</span>'
                    </span>
                          
                    <span className="component-atr">
                      required
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
        <h2>Input functionality</h2>
        <p className="mb-10">We can add input functionality using the onChange attribute.</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            <FormInput placeholder="Input" onChange={() => alert('Changed')} />
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form.Input</span>     
                          
                    <span className="component-atr">
                      placeholder='
                      <span className="component-atr-value">Input</span>'
                    </span>

                    <span className="component-atr">
                      onChange={`{`}
                      <span className="component-atr-value">{`() => alert('Changed')`}</span>{`}`}
                    </span>
                    /&gt;
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

export default InputPage;
