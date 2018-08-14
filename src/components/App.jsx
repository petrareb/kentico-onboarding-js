import '../sticky-footer.css';
import React from 'react';
import { TodoList } from '../containers/TodoList';

export const App = () => (
  <div>
    <div className="container">
      <div className="header clearfix">
        <h3 className="text-muted">
          Kentico Academy
        </h3>
      </div>
      <section id="app-content">
        <div className="col-sm-12 col-md-offset-2 col-md-8">
          <TodoList />
        </div>
      </section>
    </div>
    <footer className="footer">
      <p>
        &copy; 2017 Kentico software, s.r.o
      </p>
    </footer>
  </div>
);
