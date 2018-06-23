import React, { Component } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';

import { Container, Content, Form } from './styles';

export default class Main extends Component {
  state = {
    loadingRepo: false,
    loadingIssues: false,
    repositoryError: false,
    getIssuesError: false,
    repositoryInput: '',
    repositories: [],
    issues: [],
    currentRepository: {},
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loadingRepo: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loadingRepo: false });
    }
  };

  handleGetIssues = async (url, e) => {
    e.preventDefault();

    try {
      this.setState({ loadingIssues: true });

      if (this.state.currentRepository.name) {
        const { data: allIssues } = await api.get(`repos/${url}`);

        this.setState({
          issues: allIssues,
          getIssuesError: false,
        });
      }
    } catch (err) {
      this.setState({ getIssuesError: true });
    } finally {
      this.setState({ loadingIssues: false });
    }
  };

  handleSetRepo = async (e, rep) => {
    e.preventDefault();

    await this.setState({ currentRepository: rep });

    this.handleGetIssues(`${rep.login}/${rep.name}/issues?state=all`, e);
  };

  render() {
    return (
      <Container>
        <SideBar repositories={this.state.repositories} setCurrentRepository={this.handleSetRepo}>
          <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="(org/user)/repo"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {this.state.loadingRepo ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <i className="fa fa-plus-circle" aria-hidden="true" />
              )}
            </button>
          </Form>
        </SideBar>
        <Content>
          <Header
            currentRepository={this.state.currentRepository}
            changeStatusIssues={this.handleGetIssues}
          />
          <IssuesList
            issues={this.state.issues}
            getIssuesError={this.state.getIssuesError}
            loadingIssues={this.state.loadingIssues}
          />
        </Content>
      </Container>
    );
  }
}
