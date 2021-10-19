import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Form from 'components/Forms/Form';
import Table from 'components/Table/Table';

const InputsPage: React.FC<IPage> = props => {
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
        <h2>Example</h2>
        <p className="mb-10">Example of default input field</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Form.Input placeholder="Input exmple" />
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Row</span>
                          
                    <span className="component-atr">
                      align='
                      <span className="component-atr-value">center</span>'
                    </span>
                    &gt;
                  </span>

                  {sizes.map((size, index) => (
                    <div className="level" key={index}>
                      <span className="code-tag">
                        &lt;<span className="component-tag-name">Col</span>
                          
                        <span className="component-atr">
                          cols='
                          <span className="component-atr-value">auto</span>'
                        </span>
                        &gt;
                      </span>

                      <div className="level">
                        <span className="code-tag">
                          &lt;
                          <span className="component-tag-name">Button</span>

                          <span className="component-atr">
                            size='
                            <span className="component-atr-value">{size}</span>'
                          </span>
                          &gt;
                        </span>

                        <span className="code-content">Button {size}</span>

                        <span className="code-tag">
                          &lt;/<span className="component-tag-name">Button</span>&gt;
                        </span>
                      </div>

                      <span className="code-tag">
                        &lt;/<span className="component-tag-name">Col</span>&gt;
                      </span>
                    </div>
                  ))}

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Row</span>&gt;
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
            <Form.Input placeholder="Input exmple" />
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Row</span>
                          
                    <span className="component-atr">
                      align='
                      <span className="component-atr-value">center</span>'
                    </span>
                    &gt;
                  </span>

                  {sizes.map((size, index) => (
                    <div className="level" key={index}>
                      <span className="code-tag">
                        &lt;<span className="component-tag-name">Col</span>
                          
                        <span className="component-atr">
                          cols='
                          <span className="component-atr-value">auto</span>'
                        </span>
                        &gt;
                      </span>

                      <div className="level">
                        <span className="code-tag">
                          &lt;
                          <span className="component-tag-name">Button</span>

                          <span className="component-atr">
                            size='
                            <span className="component-atr-value">{size}</span>'
                          </span>
                          &gt;
                        </span>

                        <span className="code-content">Button {size}</span>

                        <span className="code-tag">
                          &lt;/<span className="component-tag-name">Button</span>&gt;
                        </span>
                      </div>

                      <span className="code-tag">
                        &lt;/<span className="component-tag-name">Col</span>&gt;
                      </span>
                    </div>
                  ))}

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Row</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <Form>
        <Form.Label label="Input sm" />
        <Form.Group>
          <Form.GroupText text="@" />
          <Form.Input size="sm" disabled value="fafsaf" />
        </Form.Group>
        
        <Form.Group>
          <Form.Label label="Input md (default)" />
          <Form.Input placeholder="Unesite text ovdje" />
        </Form.Group>

        <Form.Label label="Input lg" />
        <Form.Group>
          <Form.Input />
          <Form.GroupText>
            @example.com
          </Form.GroupText>
          <Form.Input placeholder="Unesite text ovdje" />
        </Form.Group>

        <Form.Label label="Select sm" />
        <Form.Group>
          <Form.Select size="sm" disabled options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
        </Form.Group>
        
        <Form.Label label="Select md (default)" />
        <Form.Group>
          <Form.Select options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
          <Form.GroupText>
            @example.com
          </Form.GroupText>
        </Form.Group>

        <Form.Label label="Select lg" />
        <Form.Group>
          <Form.Select size="lg" options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
        </Form.Group>

        <Form.Label label="Textarea sm" />
        <Form.Group>
          <Form.Textarea size="sm" placeholder="Textarea"></Form.Textarea>
        </Form.Group>

        <Form.Label label="Textarea md (default)" />
        <Form.Group>
          <Form.Textarea placeholder="Textarea"></Form.Textarea>
        </Form.Group>

        <Form.Label label="Textarea lg" />
        <Form.Group>
          <Form.GroupText text="@" />
          <Form.Textarea size="lg" placeholder="Textarea"></Form.Textarea>
          <Form.GroupText>
            @example.com
          </Form.GroupText>
        </Form.Group>
      </Form>
    </div>
  );
}

export default InputsPage;
