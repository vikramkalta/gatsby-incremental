import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const GrandParent2 = () => {
  const data = useStaticQuery(graphql`
    query Leaf2Query {
      allCsLeafNode2 {
        edges {
          node {
            title
            description
            parent_reference {
              title
              description
              parent_reference {
                title
                description
              }
            }
          }
        }
      }
    }
  `);
  const nodes = data.allCsLeafNode2.edges;
  return (
    <div style={{ height: '100%', width: '100%', background: 'pink' }}>
      <h1>LEAF-NODE2</h1>
      <Link to="/">Go home</Link>.
      <Link to="/parent2">Go to mid-node2</Link>.
      {nodes.map((node, i) => (
        <div key={i.toString()}>
          <div>{node.node.title}</div>
          <div>{node.node.description}</div>
          <hr></hr>
          {node.node.parent_reference.map((ref, j) => (
            <div key={j}>
              {'Reference'}
              <div>{ref.title}</div>
              <div>{ref.description}</div>
              <hr></hr>
              {ref.parent_reference.map((root, k) => (
                <div key={k}>
                  {'Root Reference'}
                  <div>{root.title}</div>
                  <div>{root.description}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GrandParent2;