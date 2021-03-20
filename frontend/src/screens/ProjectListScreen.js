import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProjects } from '../actions/projectActions';

const ProjectListScreen = () => {
  const dispatch = useDispatch();

  const projectList = useSelector(state => state.projectList);
  const { loading, error, projects } = projectList;

  const deleteHandler = () => {
    console.log('delete');
  };

  const createProjectHandler = () => {
    console.log('create project');
  };

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Projects</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProjectHandler}>
            <i className="fas fa-plus"> Project</i>
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Code</th>
                <th>Bowheer</th>
                <th>Location</th>
                <th>isActive</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project._id}>
                  <td>{project.projectCode}</td>
                  <td>{project.bowheer}</td>
                  <td>{project.location}</td>
                  <td>{project.isActive}</td>
                  <td>
                    <LinkContainer to={`/admin/project/${project._id}/edit`}>
                      <Button variant="info" className="btn-sm">
                        <i className="fa fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(project._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProjectListScreen;
