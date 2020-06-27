import React from "react";
import { Table, TableBody, TableHead, Paper, TableRow, Container, Grid, TableCell } from '@material-ui/core';

function PostTable(props) {
    const { posts } = props;
    return (
        <Paper>
            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Body</TableCell>
                                    <TableCell>Timestamp</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.length > 0 &&
                                    posts.map(post => (
                                        <TableRow key={post.id}>
                                            <TableCell>{post.User.email}</TableCell>
                                            <TableCell>{post.title}</TableCell>
                                            <TableCell>{post.body}</TableCell>
                                            <TableCell>{post.createdAt}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default PostTable