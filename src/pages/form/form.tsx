import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Form from 'components/Forms/Form';
import Table from 'components/Table/Table';

const FormPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <h1>Form</h1>
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
            atr: 'action',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'target',
            type: 'string',
            value: '_blank | _self | _parent | _top | string',
            default: '',
            required: false
          },
          {
            atr: 'method',
            type: 'string',
            value: 'get | post',
            default: 'get',
            required: false
          }
        ]}
      />

      <section>
        <h2 className="mb-5">Import</h2>
        <p>import Form from 'components/Forms/Form'</p>
      </section>

      <section>
        <h2>Use</h2>
        <p className="mb-10">Example of form</p>

        <div className="example">
          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form</span>
                          
                    <span className="component-atr">
                      action='
                      <span className="component-atr-value"></span>'
                    </span>
                    &gt;
                  </span>

                  <div className="level">
                    {`{/* Put your form components in here */}`}
                  </div>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Form</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Best structure practice</h2>
        <p className="mb-10">If you have multiple fields, this are best structure practices.</p>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            {/* When you use single input */}
            <Form action="">
              <Form.Label label="Label" />
              <Form.Input placeholder="Input" />
            </Form>
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                {`{/* When you use single input */}`}
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form</span>
                          
                    <span className="component-atr">
                      action='
                      <span className="component-atr-value"></span>'
                    </span>
                    &gt;
                  </span>

                  <div className="level">
                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Form.Label</span>
                        
                      <span className="component-atr">
                        label='
                        <span className="component-atr-value">Input label</span>'
                      </span>
                      /&gt;
                    </span>
                    
                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Form.Input</span>
                        
                      <span className="component-atr">
                        placeholder='
                        <span className="component-atr-value">Input</span>'
                      </span>
                      /&gt;
                    </span>
                  </div>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Form</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>

        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            {/* When you use single input with inline label */}
            <Form action="">
              <Form.Group>
                <Form.Label label="Label" />
                <Form.Input placeholder="Input" />
              </Form.Group>
            </Form>
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                {`{/* When you use single input with inline label */}`}
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form</span>
                          
                    <span className="component-atr">
                      action='
                      <span className="component-atr-value"></span>'
                    </span>
                    &gt;
                  </span>

                  <div className="level">
                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Form.Group</span>&gt;
                    </span>

                    <div className="level">
                      <span className="code-tag component">
                        &lt;<span className="component-tag-name">Form.Label</span>
                          
                        <span className="component-atr">
                          label='
                          <span className="component-atr-value">Input label</span>'
                        </span>
                        /&gt;
                      </span>

                      <span className="code-tag component">
                        &lt;<span className="component-tag-name">Form.Input</span>
                          
                        <span className="component-atr">
                          placeholder='
                          <span className="component-atr-value">Input</span>'
                        </span>
                        /&gt;
                      </span>
                    </div>

                    <span className="code-tag">
                      &lt;/<span className="component-tag-name">Form.Group</span>&gt;
                    </span>
                  </div>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Form</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
        
        <div className="example">
          <div className="p-10 border rounded-t-md example-preview">
            {/* To make gap between fields use row */}
            <Form action="">
              <Row gapY={4} gapX={3}>
                <Col cols={6}>
                  <Form.Label label="Label" />
                  <Form.Input placeholder="Input" />
                </Col>

                <Col cols={6}>
                  <Form.Label label="Label" />
                  <Form.Input placeholder="Input" />
                </Col>

                <Col>
                  <Form.Label label="Label" />
                  <Form.Input placeholder="Input" />
                </Col>
              </Row>
            </Form>
          </div>

          <div className="overflow-hidden example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  {`{/* To make complex structure use Row with Cols */}`}
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Form</span>
                          
                    <span className="component-atr">
                      action='
                      <span className="component-atr-value"></span>'
                    </span>
                    &gt;
                  </span>

                  <div className="level">
                    <span className="code-tag component">
                      &lt;<span className="component-tag-name">Row</span>

                      <span className="component-atr">
                        gapY={`{`}
                        <span className="component-atr-value">4</span>{`}`}
                      </span>
                            
                      <span className="component-atr">
                        gapX={`{`}
                        <span className="component-atr-value">3</span>{`}`}
                      </span>
                      &gt;
                    </span>

                    <div className="level">
                      <span className="code-tag component">
                        &lt;<span className="component-tag-name">Col</span>
                            
                        <span className="component-atr">
                          cols={`{`}
                          <span className="component-atr-value">6</span>{`}`}
                        </span>
                        &gt;
                      </span>

                      <div className="level">
                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Label</span>
                            
                          <span className="component-atr">
                            label='
                            <span className="component-atr-value">Input label</span>'
                          </span>
                          /&gt;
                        </span>

                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Input</span>
                            
                          <span className="component-atr">
                            placeholder='
                            <span className="component-atr-value">Input</span>'
                          </span>
                          /&gt;
                        </span>
                      </div>

                      <span className="code-tag">
                        &lt;/<span className="component-tag-name">Col</span>&gt;
                      </span>
                    </div>

                    <div className="level">
                      <span className="code-tag component">
                        &lt;<span className="component-tag-name">Col</span>
                            
                        <span className="component-atr">
                          cols={`{`}
                          <span className="component-atr-value">6</span>{`}`}
                        </span>
                        &gt;
                      </span>

                      <div className="level">
                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Label</span>
                            
                          <span className="component-atr">
                            label='
                            <span className="component-atr-value">Input label</span>'
                          </span>
                          /&gt;
                        </span>

                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Input</span>
                            
                          <span className="component-atr">
                            placeholder='
                            <span className="component-atr-value">Input</span>'
                          </span>
                          /&gt;
                        </span>
                      </div>

                      <span className="code-tag">
                        &lt;/<span className="component-tag-name">Col</span>&gt;
                      </span>
                    </div>

                    <div className="level">
                      <span className="code-tag component">
                        &lt;<span className="component-tag-name">Col</span>&gt;
                      </span>

                      <div className="level">
                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Label</span>
                            
                          <span className="component-atr">
                            label='
                            <span className="component-atr-value">Input label</span>'
                          </span>
                          /&gt;
                        </span>

                        <span className="code-tag component">
                          &lt;<span className="component-tag-name">Form.Input</span>
                            
                          <span className="component-atr">
                            placeholder='
                            <span className="component-atr-value">Input</span>'
                          </span>
                          /&gt;
                        </span>
                      </div>

                      <span className="code-tag">
                        &lt;/<span className="component-tag-name">Col</span>&gt;
                      </span>
                    </div>

                    <span className="code-tag">
                      &lt;/<span className="component-tag-name">Row</span>&gt;
                    </span>
                  </div>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Form</span>&gt;
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

export default FormPage;
