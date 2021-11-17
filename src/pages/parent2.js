import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Parent2 = () => {
  const data = useStaticQuery(graphql`
    query Parent2Query {
      allCsMidNode2 {
        edges {
          node {
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
  `);
  const nodes = data.allCsMidNode2.edges;
  return (
    <div style={{height:'100%', width: '100%', background:'pink'}}>
      <h1>MID-NODE2</h1>
      <Link to="/">Go home</Link>.
      <Link to="/grandparent2">Go leaf-node2 (go down the hierarchy)</Link>.
      <Link to="/parent1">Go mid-node1 (go to sibling node)</Link>.
      {/* <Link to="/grandparent1">Go to leaf-node1</Link>. */}
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Parent2;