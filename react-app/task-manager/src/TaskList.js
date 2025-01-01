import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((response) => setTasks(response.data));
  }, []);

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      axios.delete(`http://localhost:5000/api/tasks/${taskToDelete.id}`).then(() => {
        setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
        setOpen(false);
        setTaskToDelete(null);
      });
    }
  };

  const handleCancelDelete = () => {
    setOpen(false);
    setTaskToDelete(null);
  };

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 1200, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Task List
          </Typography>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell><Typography variant="h6">Title</Typography></TableCell>
                  <TableCell><Typography variant="h6">Description</Typography></TableCell>
                  <TableCell><Typography variant="h6">Due Date</Typography></TableCell>
                  <TableCell><Typography variant="h6">Status</Typography></TableCell>
                  <TableCell><Typography variant="h6">Actions</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {task.description}
                    </TableCell>
                    <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() => onEdit(task)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteClick(task)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the task "{taskToDelete?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskList;
