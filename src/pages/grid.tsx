import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Table from 'components/Table/Table';

const GridPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <h1>Grid</h1>
      <p className="mb-10">Use a grid to better structure your page.</p>

      <Table className="w-3/4 mb-20" headers={[{name: 'Attribute'}, {name: 'Type'}, {name: 'Values'}, {name: 'Default'}, {name: 'Required'}]}
        data={[
          {
            atr: 'cols',
            type: 'number | string',
            value: '1-12 | auto',
            default: '',
            required: false
          }
        ]}
      />

      <section>
        <h2>Default</h2>
        <p className="mb-10">The default behavior of columns within a row.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md bg-base-light example-preview">
            <Row>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 1
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 2
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 3
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 4
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 5
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 6
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 7
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 8
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 9
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 10
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 11
                </div>
              </Col>
              <Col>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 12
                </div>
              </Col>
            </Row>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    Row
                    <span className="token punctuation">&gt;</span>
                  </span> 
                </span>
                
                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />

                <span className="token comment">    &lt;!-- It automatically grows and shrinks by defaults --&gt;</span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;/</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />
                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />

                <span className="token comment">    &lt;!-- It automatically grows and shrinks by defaults --&gt;</span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;/</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />
                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />

                <span className="token comment">    &lt;!-- It automatically grows and shrinks by defaults --&gt;</span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;/</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    Row
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Attributes</h2>
        <p className="mb-10">Using the already defined attributes you can determine the size of the column.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md bg-base-light example-preview">
            <Row>
              <Col cols={4}>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 1
                </div>
              </Col>

              <Col cols={8}>
                <div className="py-4 text-center bg-base-primary text-base-light">
                  Col 2
                </div>
              </Col>
            </Row>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;</span>
                    Row
                    <span className="token punctuation">&gt;</span>
                  </span> 
                </span>
                
                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;</span>
                    Col
                  </span>

                  <span className="token attr-name"> cols</span>

                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">{`{`}</span>
                    4
                    <span className="token punctuation">{`}`}</span>
                  </span>

                  <span className="token punctuation">&gt;</span>
                </span>

                <br />

                <span className="token comment">    &lt;!-- It occupies 4 columns as defined by the attribute --&gt;</span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;/</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />
                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;</span>
                    Col
                  </span>

                  <span className="token attr-name"> cols</span>

                  <span className="token attr-value">
                    <span className="token punctuation attr-equals">=</span>
                    <span className="token punctuation">{`{`}</span>
                    8
                    <span className="token punctuation">{`}`}</span>
                  </span>

                  <span className="token punctuation">&gt;</span>
                </span>

                <br />

                <span className="token comment">    &lt;!-- It occupies 8 columns as defined by the attribute --&gt;</span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">  &lt;/</span>
                    Col
                    <span className="token punctuation">&gt;</span>
                  </span>
                </span>

                <br />

                <span className="token tag">
                  <span className="token tag">
                    <span className="token punctuation">&lt;/</span>
                    Row
                  </span>
                  <span className="token punctuation">&gt;</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </section>


      {/* <div className="example">
        <div className="example-preview">
          <Row>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 1
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 2
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 3
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 4
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 5
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 6
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 7
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 8
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 9
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 10
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 11
              </div>
            </Col>
            <Col>
              <div className="py-4 text-center bg-base-primary text-base-light">
                Col 12
              </div>
            </Col>
          </Row>
        </div>

        <div className="example-code">
          <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
            <code className="language-html">
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>
                  Row
                </span> 
                <span className="token attr-name"> class</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">"</span>
                  flex
                  <span className="token punctuation">"</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              
              <br />

              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;</span>
                  div
                </span> 
                <span className="token attr-name"> class</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">"</span>
                  <span className="code-highlight bg-code-highlight">flex-initial</span>
                  ...
                  <span className="token punctuation">"</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />

              <span className="token comment">    &lt;!-- Won't grow, but will shrink if needed --&gt;</span>

              <br />

              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;/</span>
                  div
                </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />
              <br />

              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;</span>
                  div
                </span> 
                <span className="token attr-name"> class</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">"</span>
                  <span className="code-highlight bg-code-highlight">flex-initial</span> 
                  ...
                  <span className="token punctuation">"</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />

              <span className="token comment">    &lt;!-- Won't grow, but will shrink if needed --&gt;</span>

              <br />
              
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;/</span>
                  div
                  </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />
              <br />

              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;</span>
                  div
                </span> 
                <span className="token attr-name"> class</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">"</span>
                  <span className="code-highlight bg-code-highlight">flex-initial</span> 
                  ...
                  <span className="token punctuation">"</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />

              <span className="token comment">    &lt;!-- Won't grow, but will shrink if needed --&gt;</span>

              <br />
              
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">  &lt;/</span>
                  div
                </span>
                <span className="token punctuation">&gt;</span>
              </span>

              <br />

              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>
                  div
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
            </code>
          </pre>
        </div>
      </div> */}
    </div>
  );
}

export default GridPage;
