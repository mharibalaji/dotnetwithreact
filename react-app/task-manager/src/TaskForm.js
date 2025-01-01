import React, { useState } from "react";
import { TextField, Button, MenuItem, Card, CardContent, Typography, Box, Grid } from "@mui/material";
import axios from "axios";

const statuses = ["Pending", "In Progress", "Completed"];

const TaskForm = ({ task, onSave }) => {
  const [form, setForm] = useState(task || { title: "", description: "", dueDate: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      axios.put(`http://localhost:5000/api/tasks/${form.id}`, form).then(() => onSave());
    } else {
      axios.post("http://localhost:5000/api/tasks", form).then(() => onSave());
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 3 }}>
            {form.id ? "Edit Task" : "Add New Task"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  fullWidth
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Due Date"
                  type="date"
                  fullWidth
                  value={form.dueDate}
                  onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Status"
                  fullWidth
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={onSave}>
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskForm;
