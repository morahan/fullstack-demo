DROP DATABSE IF EXISTS bugs;

CREATE DATABASE bugs;

\c bugs;

create table bugReports (
    id serial,
    reporter varchar(75),
    description varChar(250),
    threatLevel varChar(23),
    assignedTeamMember varChar(75)
);

insert into bugReports (reporter, description, threatLevel, assignedTeamMember) VALUES ('mike', 'bugs app not working as expected', 'moderate', 'self');


