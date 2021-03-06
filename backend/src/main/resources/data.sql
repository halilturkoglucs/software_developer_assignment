-- Roles
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MANAGER');
INSERT INTO roles(name) VALUES('ROLE_DIRECTOR');

-- Users: See READ.me for the decrypted passwords

-- Normal registered user without any previleges
INSERT INTO USERS(ID, USERNAME, PASSWORD) VALUES ('1', 'user', '$2a$10$yw04FoNyvgE3x6v/qky0NONqoVizKz2RRhZahNh/7CbKqvgwDpS06');

-- Users for the assignment
INSERT INTO USERS(ID, USERNAME, PASSWORD) VALUES ('2', 'manager', '$2a$10$NXJ9LwohOveqB35VCvTqeel0mZW2kyIVziBnOGZGHLKWHRnvXBEzC');
INSERT INTO USERS(ID, USERNAME, PASSWORD) VALUES ('3', 'director', '$2a$10$a8An1yPkmRwj8i4CETc.HeLBpvV/hTwhX/HdTM8EIbHUtBqZLepeu');

-- User-Role Assignments
INSERT INTO USER_ROLES VALUES ('1', '1');
INSERT INTO USER_ROLES VALUES ('2', '2');
INSERT INTO USER_ROLES VALUES ('3', '3');

-- Teams
INSERT INTO TEAMS (ID, NAME, MANAGER_APPROVAL_STATUS, DIRECTOR_APPROVAL_STATUS) VALUES ('1', 'Team 1', 0, 0);
INSERT INTO TEAMS (ID, NAME, MANAGER_APPROVAL_STATUS, DIRECTOR_APPROVAL_STATUS)  VALUES ('2', 'Team 2', 0, 0);
INSERT INTO TEAMS (ID, NAME, MANAGER_APPROVAL_STATUS, DIRECTOR_APPROVAL_STATUS)  VALUES ('3', 'Team 3', 0, 0);
INSERT INTO TEAMS (ID, NAME, MANAGER_APPROVAL_STATUS, DIRECTOR_APPROVAL_STATUS)  VALUES ('4', 'Team 4', 0, 0);