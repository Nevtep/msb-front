// src/pages/admin.js
import React from "react"
import { ProtectedRoute } from "../components/auth/ProtectedRoute"

const Admin = () => (
  <ProtectedRoute>
    <div>
      <p>This is going to be an admin protected route.</p>
    </div>
  </ProtectedRoute>
)

export default Admin