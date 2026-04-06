# Collection Management API Documentation

## Overview

The Collection Management System allows you to manage best, top, and new items for:

- **Courses** → `App\Models\Course\Course`
- **Exams** → `App\Models\Course\SectionQuiz`
- **Blogs** → `App\Models\Page`
- **Instructors** → `App\Models\Instructor`

The system automatically resolves the correct model based on the collection type.

Each collection type supports:

- **best**: Single ID (string) for the best item
- **top**: Array of IDs for top items
- **new**: Array of IDs for new items
- **featured**: Array of IDs for featured items (future use)
- **trending**: Array of IDs for trending items (future use)
- **popular**: Array of IDs for popular items (future use)

---

## API Endpoints

### 1. Get All Collections

**GET** `/api/collections`

Returns all collection configurations.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "courses",
      "best": "1",
      "top": [1, 2, 3, 4, 5, 6, 7, 8],
      "new": [16, 15, 14, 13, 12, 11, 10, 9],
      "featured": null,
      "trending": null,
      "popular": null
    },
    ...
  ]
}
```

---

### 2. Get Collection Data

**GET** `/api/collections/{type}/{category}`

Get collection data with full model instances.

**Parameters:**

- `type`: courses, exams, blogs, instructors
- `category`: best, top, new, featured, trending, popular

**Examples:**

```bash
GET /api/collections/courses/best
GET /api/collections/exams/top
GET /api/collections/blogs/new
GET /api/collections/instructors/top
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Course Title",
      // ... full course data
    },
    ...
  ],
  "ids": [1, 2, 3, 4, 5, 6, 7, 8]
}
```

---

### 3. Update Collection (Admin Only)

**PUT/PATCH** `/api/collections/{type}/{category}`

Update collection IDs. Requires admin authentication.

**Headers:**

```
Authorization: Bearer {token}
```

**Request Body (for best):**

```json
{
   "id": "5"
}
```

Note: The `id` can be sent as string or integer, it will be stored as string.

**Request Body (for top/new/etc):**

```json
{
   "ids": [1, 2, 3, 4, 5]
}
```

**Examples:**

```bash
# Update best course
PUT /api/collections/courses/best
Body: { "id": 5 }

# Update top exams
PUT /api/collections/exams/top
Body: { "ids": [1, 2, 3, 4, 5] }

# Update new blogs
PATCH /api/collections/blogs/new
Body: { "ids": [20, 19, 18, 17, 16] }
```

**Response:**

```json
{
   "success": true,
   "message": "Collection updated successfully",
   "data": {
      "id": 1,
      "type": "courses",
      "best": "5",
      "top": [1, 2, 3, 4, 5],
      "new": [20, 19, 18, 17, 16]
   }
}
```

---

### 4. Toggle ID in Collection (Admin Only)

**POST** `/api/collections/{type}/{category}/toggle`

Add or remove a single ID from a collection. Requires admin authentication.

**Headers:**

```
Authorization: Bearer {token}
```

**Request Body:**

```json
{
   "id": 3
}
```

**Behavior:**

- If ID exists in collection → Remove it
- If ID doesn't exist → Add it
- For `best` category → Toggle between selected ID and null

**Examples:**

```bash
# Toggle course in top collection
POST /api/collections/courses/top/toggle
Body: { "id": 3 }

# Toggle instructor in new collection
POST /api/collections/instructors/new/toggle
Body: { "id": 7 }
```

**Response:**

```json
{
   "success": true,
   "message": "ID added successfully",
   "data": {
      "id": 1,
      "type": "courses",
      "top": [1, 2, 3, 4, 5]
   }
}
```

---

## Frontend Integration Example

### Fetching Collection Data

```javascript
// Get top courses
const response = await fetch('/api/collections/courses/top');
const { data, ids } = await response.json();

// data: Full course objects
// ids: Array of course IDs [1, 2, 3, 4, 5, 6, 7, 8]
```

### Updating Collection (Admin)

```javascript
// Update top courses
const response = await fetch('/api/collections/courses/top', {
   method: 'PUT',
   headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({
      ids: [1, 2, 3, 4, 5],
   }),
});
```

### Toggle Item in Collection (Admin)

```javascript
// Toggle course ID 3 in top collection
const response = await fetch('/api/collections/courses/top/toggle', {
   method: 'POST',
   headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({
      id: 3,
   }),
});

const result = await response.json();
console.log(result.message); // "ID added successfully" or "ID removed successfully"
```

---

## React Component Example

```typescript
import { useState, useEffect } from 'react';

const CollectionManager = ({ type, category }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch collection data
    fetch(`/api/collections/${type}/${category}`)
      .then(res => res.json())
      .then(({ data, ids }) => {
        setItems(data);
        setSelectedIds(ids || []);
      });
  }, [type, category]);

  const handleToggle = async (id) => {
    const response = await fetch(`/api/collections/${type}/${category}/toggle`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });

    const result = await response.json();
    if (result.success) {
      // Update local state
      setSelectedIds(result.data[category] || []);
    }
  };

  const handleSave = async () => {
    const response = await fetch(`/api/collections/${type}/${category}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ids: selectedIds
      })
    });

    const result = await response.json();
    if (result.success) {
      alert('Collection updated successfully!');
    }
  };

  return (
    <div>
      {items.map(item => (
        <div
          key={item.id}
          onClick={() => handleToggle(item.id)}
          className={selectedIds.includes(item.id) ? 'selected' : ''}
        >
          {item.title}
        </div>
      ))}
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};
```

---

## Database Schema

```sql
CREATE TABLE collections (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(255) UNIQUE NOT NULL,
  best VARCHAR(255) NULL,
  top JSON NULL,
  new JSON NULL,
  featured JSON NULL,
  trending JSON NULL,
  popular JSON NULL,
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL,
  INDEX(type)
);
```

**Note:** The `type` field determines which model to use:

- `courses` → `App\Models\Course\Course`
- `exams` → `App\Models\Course\SectionQuiz`
- `blogs` → `App\Models\Page`
- `instructors` → `App\Models\Instructor`

---

## Default Data

After running the seeder, the following default collections are created:

### Courses

- **best**: "1"
- **top**: [1, 2, 3, 4, 5, 6, 7, 8]
- **new**: [16, 15, 14, 13, 12, 11, 10, 9]

### Exams

- **best**: "1"
- **top**: [1, 2, 3]
- **new**: [3, 2, 1]

### Blogs

- **best**: "1"
- **top**: [1, 2, 3, 4, 5, 6, 7, 8]
- **new**: [16, 15, 14, 13, 12, 11, 10, 9]

### Instructors

- **best**: "1"
- **top**: [1, 2, 3, 4, 5, 6]
- **new**: [12, 11, 10, 9, 8, 7]

---

## Error Responses

### Collection Not Found (404)

```json
{
   "success": false,
   "message": "Collection not found for type: courses"
}
```

### Invalid Category (400)

```json
{
   "success": false,
   "message": "Invalid category: invalid_category"
}
```

### Validation Error (422)

```json
{
   "success": false,
   "errors": {
      "ids": ["The ids field is required."]
   }
}
```

### Unauthorized (401)

```json
{
   "success": false,
   "message": "Unauthenticated."
}
```

---

## Running Migration and Seeder

```bash
# Run migration
php artisan migrate

# Run seeder
php artisan db:seed --class=CollectionSeeder

# Or fresh migration with all seeders
php artisan migrate:fresh --seed
```

---

## Notes

1. **Admin Middleware**: Update routes require admin authentication via `auth:sanctum` and `admin` middleware
2. **Type-Based Model Resolution**: The system automatically maps collection types to their corresponding models:
   - `courses` → `App\Models\Course\Course`
   - `exams` → `App\Models\Course\SectionQuiz`
   - `blogs` → `App\Models\Page`
   - `instructors` → `App\Models\Instructor`
3. **Best Field**: Stored as string to support both numeric IDs and slug-based references
4. **Order Preservation**: IDs in arrays maintain their order using MySQL's `FIELD()` function
5. **Future Categories**: `featured`, `trending`, and `popular` columns are ready for future use
6. **Toggle Endpoint**: Perfect for checkbox-style selection in admin interfaces
