  <AppBar style={{ backgroundColor: 'transparent' }} position="sticky">
            <Toolbar className={classes.toolbar}>
              <StyledButton size="large" onClick={() => history.push('/')}>Home</StyledButton>
              <StyledButton size="large" onClick={() => history.push('./Mars')}>View Mars</StyledButton>

                
            </Toolbar>
        </AppBar>