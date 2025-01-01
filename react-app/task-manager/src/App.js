import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Button, Typography, Box, Container } from "@mui/material";

const App = () => {
  // State to manage which component is active and the task to edit
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Function to handle editing a task
  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  // Function to handle saving (after adding or editing a task)
  const handleSave = () => {
    setEditingTask(null);
    setShowForm(false);
  };

  // Function to handle adding a new task
  const handleAddNew = () => {
    setEditingTask(null); // Reset editing task
    setShowForm(true); // Show form for a new task
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3">Task Management System</Typography>
      </Box>
      {showForm ? (
        <TaskForm task={editingTask} onSave={handleSave} />
      ) : (
        <>
          <TaskList onEdit={handleEdit} />
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
            onClick={handleAddNew}
          >
            Add New Task
          </Button>
        </>
      )}
    </Container>
  );
};

export default App;
