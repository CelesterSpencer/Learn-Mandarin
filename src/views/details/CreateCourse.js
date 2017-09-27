import React, {Component} from 'react';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import BackButton from '../../containers/BackButton';

class CreateCourse extends Component {
    render() {
        return (
            <Page>
                <HeaderBar>
                    <BackButton />
                </HeaderBar>
                <PageContent>
                    Create Course
                </PageContent>
            </Page>
        );
    }
}

export default CreateCourse;