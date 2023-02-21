/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Only users for Administrators
 *     tags:
 *       - User
 *     requestBody:
 *       description: User who has the Admin role in the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/get-all'
 *     responses:
 *       201:
 *         description: Getl
 *         content:
 *           application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: example example here
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *       - User
 *     requestBody:
 *      description: Required fields for the user to login
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schema/get-user-by-id'
 *     responses:
 *       200:
 *         description: Ok
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Correct Credentials
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not Found User
 * /api/v1/users/{id}/votes:
 *   get:
 *     tags:
 *       - User
 *     requestBody:
 *      description: Required fields for the user to login
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schema/login'
 *     responses:
 *       200:
 *         description: Ok
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Correct Credentials
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not Found User
 * /api/v1/users/{id}/publications:
 *   get:
 *     tags:
 *       - User
 *     requestBody:
 *      description: Required fields for the user to login
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: '#/components/schema/login'
 *     responses:
 *       200:
 *         description: Ok
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Correct Credentials
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not Found id publications
 * paths:
 *   /api/v1/users/{id}:
 *     put:
 *       tags:
 *         - User
 * 
 */