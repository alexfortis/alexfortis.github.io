import java.io.*;

public class SignJars {
    public static class JarFilter implements FileFilter {
	public boolean accept(File f) {
	    String name = f.getName();
	    return name.substring(name.length()-4).equals(".jar");
	}
    }

    public static void main(String[] args) {
	try {
	    File folder = new File(System.getProperty("user.dir") + "/libs");
	    File script = new File("signJars.sh");
	    PrintStream ps = new PrintStream(script);
	    File[] jars = folder.listFiles(new JarFilter());
	    for(File f : jars) {
		ps.println("echo \"Signing " + f.getName() + "...\"");
		ps.println("jar ufm libs/" + f.getName() + " ../manifest.txt");
		ps.println("jarsigner libs/" + f.getName() + " alexstrong");
	    }
	    ps.println("echo \"Done.\"");
	}
	catch(Throwable t) {
	    t.printStackTrace();
	}
    }
}