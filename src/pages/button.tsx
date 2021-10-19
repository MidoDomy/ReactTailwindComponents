import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';

const ButtonsPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const variants = ['primary', 'secondary', 'light', 'dark', 'success', 'danger', 'warning', 'info'];
  const sizes = ['sm', 'md', 'lg'];

  return (
    <div>
      <h1>Button</h1>
      <p className="mb-10">Use custom style buttons, there can be both a link and a button.</p>

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
            atr: 'variant',
            type: 'string',
            value: "(primary, secondary...)",
            default: 'primary',
            required: false
          },
          {
            atr: 'outline',
            type: 'boolean',
            value: 'true | false',
            default: 'false',
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
            atr: 'block',
            type: 'boolean',
            value: 'true | false',
            default: 'false',
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
            atr: 'href',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'to',
            type: 'string',
            value: '',
            default: '',
            required: false
          },
          {
            atr: 'onClick',
            type: 'function',
            value: '',
            default: '',
            required: false
          }
        ]}
      />

      <section>
        <h2>Variants</h2>
        <p className="mb-10">These are some of the already styled variants.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Row>
              {variants.map((variant, index) => (
                <Col cols='auto' key={index}>
                  <Button variant={variant} className="capitalize">{variant}</Button>
                </Col>
              ))}
            </Row>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre tabIndex={0} className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html" data-lang="html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Row</span>&gt;
                  </span>

                  {variants.map((variant, index) => (
                    <div className="level p" key={index}>
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
                            variant='
                            <span className="component-atr-value">{variant}</span>'
                          </span>
                          &gt;
                        </span>

                        <span className="capitalize code-content">{variant}</span>

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
        <h2>Outline style</h2>
        <p className="mb-10">These are some of the already styled variants.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Row>
              {variants.map((variant, index) => (
                <Col cols='auto' key={index}>
                  <Button variant={variant} outline className="capitalize">{variant}</Button>
                </Col>
              ))}
            </Row>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag component">
                    &lt;<span className="component-tag-name">Row</span>&gt;
                  </span>

                  {variants.map((variant, index) => (
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
                            variant='
                            <span className="component-atr-value">{variant}</span>'
                          </span>

                          <span className="component-atr">
                            outline
                          </span>
                          &gt;
                        </span>

                        <span className="capitalize code-content">{variant}</span>

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
            <Row align="center">
              <Col cols='auto'>
                <Button size='sm'>Button sm</Button>
              </Col>

              <Col cols='auto'>
                <Button>Button md (default)</Button>
              </Col>

              <Col cols='auto'>
                <Button size='lg'>Button lg</Button>
              </Col>
            </Row>
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
        <h2>Block</h2>
        <p className="mb-10">Block button takes full width.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Button block>Button block</Button>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;
                    <span className="component-tag-name">Button</span>

                    <span className="component-atr">
                      block
                    </span>
                    &gt;
                  </span>

                  <span className="code-content">Button block</span>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Button</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Disabled</h2>
        <p className="mb-10">Disabled btn styles.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Button disabled>Button disabled</Button>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;
                    <span className="component-tag-name">Button</span>

                    <span className="component-atr">
                      disabled
                    </span>
                    &gt;
                  </span>

                  <span className="code-content">Button disabled</span>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Button</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Link button</h2>
        <p className="mb-10">If we add a href or that attribute, even though it looks like a button it's actually a link.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Button href="#">Button link</Button>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;
                    <span className="component-tag-name">Button</span>

                    <span className="component-atr">
                      href='
                      <span className="component-atr-value">#</span>'
                    </span>
                    &gt;
                  </span>

                  <span className="code-content">Button link</span>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Button</span>&gt;
                  </span>
                </div>

                <div className="level">
                  <span className="code-tag">
                    &lt;
                    <span className="component-tag-name">Button</span>

                    <span className="component-atr">
                      to='
                      <span className="component-atr-value">/</span>'
                    </span>
                    &gt;
                  </span>

                  <span className="code-content">Button router link</span>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Button</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Button functionality</h2>
        <p className="mb-10">We can add button functionality using the onClick attribute.</p>

        <div className="mb-10 example">
          <div className="p-10 border rounded-t-md example-preview">
            <Button onClick={() => alert('Clicked')}>Button</Button>
          </div>

          <div className="overflow-hidden rounded-b-md example-code">
            <pre className="p-6 overflow-x-auto text-sm leading-snug text-white bg-black bg-opacity-75 scrollbar-none language-html">
              <code className="language-html">
                <div className="level">
                  <span className="code-tag">
                    &lt;
                    <span className="component-tag-name">Button</span>

                    <span className="component-atr">
                      onClick={`{`}
                      <span className="component-atr-value">{`() => alert('Clicked')`}</span>{`}`}
                    </span>
                    &gt;
                  </span>

                  <span className="code-content">Button</span>

                  <span className="code-tag">
                    &lt;/<span className="component-tag-name">Button</span>&gt;
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5">Import</h2>
        <p>import Button from 'components/Button/Button'</p>
      </section>
    </div>
  );
}

export default ButtonsPage;
