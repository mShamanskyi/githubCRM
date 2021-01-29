import { QueryResult } from 'pg';
import { ProjectData } from 'entities.types';
import { pool } from './database';

export default class ProjectDataBase {
  static async getUserProjects(id: string): Promise<ProjectData[]> {
    const sql = `
        SELECT * 
        FROM projects
        WHERE lower(user_id) = lower($1)
    `;

    const response: QueryResult = await pool.query(sql, [id]);
    return response.rows;
  }

  static async updateProjectData(
    id: string,
    stars: number,
    forks: number,
    issues: number
  ): Promise<ProjectData[]> {
    const sql = `
      UPDATE projects 
				SET stars = $2, 
					  forks = $3, 
					  issues = $4
        WHERE id = $1
      `;

    const response: QueryResult = await pool.query(sql, [id, stars, forks, issues]);
    return response.rows;
  }

  static async deleteProject(id: string): Promise<ProjectData[]> {
    const sql = `
        DELETE FROM projects
        WHERE lower(id) = lower($1)
    `;

    const response: QueryResult = await pool.query(sql, [id]);
    return response.rows;
  }

  static async findProjectById(id: string): Promise<ProjectData[]> {
    const sql = `
      SELECT * 
      FROM projects
      WHERE lower(id) = lower($1)
    `;

    const response: QueryResult = await pool.query(sql, [id]);
    return response.rows;
  }

  static async createProject({
    id,
    user_id,
    owner,
    name,
    url,
    stars,
    forks,
    issues,
    create_date,
  }: ProjectData) {

    const sql = `
        INSERT 
        INTO projects (id, user_id, owner, name, url, stars, forks,issues,create_date)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;
    const response: QueryResult = await pool.query(sql, [id, user_id, owner, name, url, stars, forks, issues, create_date,]);

    return response.rows;
  }
}